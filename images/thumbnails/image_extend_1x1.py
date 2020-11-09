from PIL import Image
from os import listdir, chdir
from os.path import isfile, join

NEW_WIDTH = 205
NEW_HEIGHT = 294


def extend_image_size_1x1(filename):
	img = Image.open(filename)
	#x1, y1, x2, y2 = -10, -20, 1000, 500  # cropping coordinates
	width, height = img.size   # Get dimensions
	new_size = width
	if height > new_size:
		new_size = height

	bg = Image.new('RGB', (new_size, new_size), (255, 255, 255))
	left = int((new_size-width)/2)
	top = int((new_size-height)/2)
	bg.paste(img, (left, top))
	bg.save(filename)

if __name__ == '__main__':

	mypath = "1x1"
	onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
	chdir(mypath)
	for image in onlyfiles:
		extend_image_size_1x1(image)