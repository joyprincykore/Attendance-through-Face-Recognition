# Microsoft (Face Recognition for Tracking Attendance)
Firstly we have to install face_recognition,dlib,cmake,numpy and openCV libraries.
Face_Recognition library is used to load the image and convert it into rgb because we are the image as bgr, but the library understands the rgb.

STEP-1:Import the libraries cv2,os,numpy and face_recognition.Import the images and covert into rgb.Create a list that will get the images from our folder automatically and then it generate the encodings for it automatically and then it will try to find it in our webcam.
What we will do is, we will ask our program to find the folder containing images and find the number of images it has and import them and find the encodings for them.So, to do that we are going to import os.
i) Import our images:
![carbon (1)](https://user-images.githubusercontent.com/94541869/170849428-0357f3c2-8581-4860-a228-924458938333.png)

