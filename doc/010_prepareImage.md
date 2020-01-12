# Prepare the Image
1. Download basic image from the [Raspbian Page](https://www.raspberrypi.org/downloads/raspbian/) (e.g. 2019-09-26-raspbian-buster-lite.zip)
1. Write image to sdcard (e.g. with [Win32 Disk Imager](https://www.chip.de/downloads/Win32-Disk-Imager_46121030.html))
1. Activate ssh in image by creating a file ```ssh``` in the root folder of the mounted image
1. Boot the system and login with default password of ```pi``` and ```raspberry```.
1. Set a new password.
1. Do an ```apt-get update && apt-get -y upgrade```.
1. Activate wifi as described [here](https://youtu.be/tIeOFrv0H8Y?t=360).
1. Activate wifi reconnect as described [here](https://youtu.be/sYudkNlVjIQ?t=44).
1. Install Git.
1. Clone ```https://github.com/tab269/tempi.git```.
1. Install dependencies with ```apt-get -y install bc```.
1. Load modules with ```modprobe w1_gpio w1_therm```.
1. Activate module-load on startup by inserting two lines at the end of ```/etc/modules``` each containing one of the modules just loaded before.
1. Configure 1-wire by inserting the following line at the end of ```/boot/config.txt```: ```dtoverlay=w1-gpio,gpioin=4,pullup=on```.

