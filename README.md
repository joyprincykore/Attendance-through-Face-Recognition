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





![Screenshot (105)](https://user-images.githubusercontent.com/94541869/170850811-e608fde2-50e1-450b-a0a3-f4e2b80971f1.png)


STEP-3: The third step is to find the matches between our encodings.But we don't have an image to match it with.Now that image will be coming from our webcam.
So,now let's initialise the webcam.
Now we write while loop to get each frame one by one. success, img = cap.read()-->This will give us our image.
imgS = cv2.resize(img,(0,0),None,0.25,0.25)-->now because we are doing this in real time, what we want to do is to reduce the size of our image because because this will help us in speeding the process.
Now again convert the image into rgb.Next step is to find the encodings of our web cam.Now, in the web cam image we can find multiple faces,so for that we are going to find the location of our faces and send these locations to our encoding function.





![carbon (7)](https://user-images.githubusercontent.com/94541869/170850287-04f1c38e-93fd-4639-9717-d04fc073e1b5.png)


Now for finding the matches what we will do is, we will iterate through all the faces that we have found in our current frame and then we will compare all these faces with all the encodings that we have found before.Next we have to find the distance between the faces(lowest distance will be the best match).So, what we have to do is find the lowest elements in our list and that will be our best match.Now, we get to know who the person is.So, at the end we can simply display a bounding box around the person and display his/her name.







![carbon (8)](https://user-images.githubusercontent.com/94541869/170850755-949ec5a8-21a0-483c-b702-ea9d6f521465.png)
