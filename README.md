# Microsoft (Face Recognition for Tracking Attendance)
Firstly we have to install face_recognition,dlib,cmake,numpy and openCV libraries.
Face_Recognition library is used to load the image and convert it into rgb because we are the image as bgr, but the library understands the rgb.

STEP-1:Import the libraries cv2,os,numpy and face_recognition.Import the images and covert into rgb.Create a list that will get the images from our folder automatically and then it generate the encodings for it automatically and then it will try to find it in our webcam.
What we will do is, we will ask our program to find the folder containing images and find the number of images it has and import them and find the encodings for them.So, to do that we are going to import os.
i) Import our images
ii)And then create a list of all images that we will import.
iii)writing of all the names of the images.(To display the names of the images in the output.)
iv)Now what we will do is we will grab the list of images in the ImageAttendance Folder.
v)Now , it will print the image names present in the folder.

















![carbon (2)](https://user-images.githubusercontent.com/94541869/170849659-64bdbeec-668c-481b-9000-b8bfb2876c92.png)

Using those names now we will import the images one by one.imread function is present in the opencv library.Now we have to append the images to the new list.Last thing we will do is to append our class name as well.













![carbon (5)](https://user-images.githubusercontent.com/94541869/170849647-1c5f5bd1-d7e0-4337-b974-26e34d3b2045.png)

print(classnames)->this will print the image names without its extension(i.e,jpg).


STEP-II: Next, we are going to start with encoding process.So,to do that once we import our image we have to find the encodings for each one of them.To do so,we can create a simple function that will compute all the encodings.
encodelist=[] --> This is the empty list that will have all the encodings at the end.
Then we are going to loop through all the images.So, firstly we have to convert image into rgb. So, next step is to find the encodings.And then we just append it to our list.Then to return we use return encodelist. Now to run that we have to call the function.Whenever we complete the encodings,we can print "encodings complete".

