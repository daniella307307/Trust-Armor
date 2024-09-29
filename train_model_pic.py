import numpy as np
import cv2
import os
import random
import matplotlib.pyplot as plt
import pickle
from keras.api.models import Sequential
from keras.api.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.model_selection import train_test_split
from tensorflow.keras.utils import to_categorical

# Constants
DIRECTORY = 'C:\\Users\\ganza\\Downloads\\malware_dataset\\train'
CATEGORIES = ['Vilsel', 'VBKrypt','VBA', 'Stantinko','Snarasite','Sality','Regrun','Neshta',
              'Neoreklami','MultiPlug','Lolyda.AA2','Lolyda.AA1','InstallCore','Injector','Hlux',
              'HackKMS','Fasong','Fakerean','Expiro','Elex','Dinwod','Dialplatform.B',
              'C2LOP.gen!g','BrowseFox','Autorun','Androm','Amonetize','Alueron.gen!J',
              'Allaple','Agent','Adposhel', 'media']  
IMG_SIZE = 128


# Load and preprocess images
data = []
for category in CATEGORIES:
    folder = os.path.join(DIRECTORY, category)
    label = CATEGORIES.index(category)
    for img in os.listdir(folder):
        img_path = os.path.join(folder, img)
        img_arr = cv2.imread(img_path)
        img_arr = cv2.resize(img_arr, (IMG_SIZE, IMG_SIZE))
        data.append([img_arr, label])

random.shuffle(data)

# Prepare the dataset
X = []
Y = []
for features, labels in data:
    X.append(features)
    Y.append(labels)

X = np.array(X)
Y = np.array(Y)

# One-hot encode labels for multi-class classification
Y = to_categorical(Y, num_classes=len(CATEGORIES))

# Feature scaling
X = X / 255.0

# Save data if needed
pickle.dump(X, open('X.pkl', 'wb'))
pickle.dump(Y, open('Y.pkl', 'wb'))

# Load data
x = pickle.load(open("X.pkl", 'rb'))
y = pickle.load(open("Y.pkl", 'rb'))

# Split the data into training and validation sets
X_train, X_val, Y_train, Y_val = train_test_split(x, y, test_size=0.2, random_state=42)

# Create an ImageDataGenerator for augmentation
datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

# Define the CNN model
model = Sequential()
model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(IMG_SIZE, IMG_SIZE, 3)))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Conv2D(64, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Conv2D(128, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Conv2D(256, (3, 3), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Flatten())
model.add(Dense(512, activation='relu'))
model.add(Dropout(0.5))  # Dropout layer to reduce overfitting
model.add(Dense(len(CATEGORIES), activation='softmax'))  # Output layer for 30 classes

# Compile the model for multi-class classification
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model using the augmented data
history = model.fit(datagen.flow(X_train, Y_train, batch_size=32), 
                    validation_data=(X_val, Y_val), 
                    epochs=20)  # Adjust the epochs based on performance

# Plotting the training accuracy and validation accuracy
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.show()

# Plotting the training loss and validation loss
plt.plot(history.history['loss'], label='Training Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
plt.show()

# Save the model
model.save('C:\\Users\\ganza\\OneDrive\\Documents\\trust-armor\\malware_classifier.h5')

