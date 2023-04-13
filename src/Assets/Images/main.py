from rembg import remove
from PIL import Image
import os
crd = os.getcwd()
# Store path of the image in the variable input_path
input_path =  crd+'\\Intro.jpg'
  
# Store path of the output image in the variable output_path
output_path = crd
  
# Processing the image
input = Image.open(input_path)
  
# Removing the background from the given Image
output = remove(input)
  
#Saving the image in the given path
output.save(output_path+"\\Intro.png")