# Flash a custom ROM on a Blackview A7

## Why, oh why?

...

## Before you start

### Disclaimers

# Rooting your Android device will *not* eliminate your Blackview A7’s warranty, whether you are in UK or Europe.
# Root causes the modifications of data files essential for the good operation of your Blackview A7.
    So make sure you find out what you are doing before you get started.
# Rooting your device incorrectly could brick your phone (didn't happened with mine).
    Again, make sure you understand what you're doing.

### Steps

# Back up anything you want to keep
# Enable USB debugging on the phone
# Unlock your bootloader
# Root your phone (optional)
# Install your custom ROM
# Additional interesting bits

## Back up anything you want to keep

Before we begin, it’s important to mention: this process will erase all of your data.

Wasn't the case for me - I decided to not even start using it before flashing my custom and less nosey ROM on it - but if you're doing
it on an oldish phone that holds all your beloved data and the pictures of your best friend's wedding you may want to transfer them to your computer now.

In addition, if you have any app settings you want to keep, use their backup function to create a backup settings file, and transfer those to your computer as well.

You have a few options here.

# Just connect it to your laptop via USB
# Install the Android SDK and do it in deep

### Option 1: Laptop + USB connection

If you only need to backup pictures you snapped and random files from the internet, this will work great.

With the added bonus that you don't go through google, and the added downside that it will be only on one computer, so maybe back it up from your computer as well once you're done transfering?

### Option 2: Google back up

Yep, I know, I just said Google is the worst busybody ever.

But hey, you've used that phone for ages, they already know everything there is to know about you and your mum.
And that guy you've just passed by in the street.
And your estranged uncle Jeremiah that your family hasn't spoke to in ages but your dad cursory mentioned two Christmases ago.

So don't worry, get yourself a good wi-fi, get into `settings` -> `Back up and reset`, and enable your data back up.

## Enable USB debugging on the phone

Enabling USB debugging on a Blackview A7 is hidden away, luckily the steps are all over the internet - and now here as well!

First, unlock the `Developer Options` menu in your phone (not kidding, this is how you do it):

# App drawer
# `Settings` -> `About Device/Phone`
# Look for `Build Number`
# Just tap over the build number section about 7 to 10 times
# After tapping over build number, your A7 device will display a popup message saying "you are now a developer"

This will unlock Developer Options menu in your Blackview A7 Android device.

Once it's unlocked, go into `settings` -> `developer options` and enable `USB debugging` and `OEM unlocking`.

## Unlock the bootloader

### Preconditions

WARNING: this will reset your phone completely.
If you want to back up anything, do it before this step.

# Charge your cellphone and be sure that it is charged more than 75%.
# Install the appropriate software:
  `sudo apt-get install android-tools-adb android-tools-fastboot`

To list a fully started device, use `adb devices`.
To list a device started in fastboot mode, use `fastboot devices`.

It's worth  having a look at `adb --help` and `fastboot --help`.

### Boot into the bootloader

https://www.hardreset.info/devices/blackview/blackview-a7/fastboot-mode/

1. At first turn off the phone by pressing the Power button for a couple of seconds.
2. In the second step hold down Volume Up and Power keys for a short while.
3. Let go of all button when Boot Mode pops up.
4. in this mode use Volume Up button to choose "Fastboot Mode" and press the Volume Down key to confirm that.

### Unlock your bootloader

1. In a terminal, type `fastboot oem unlock`.
2. On your phone, accept the conditions.
3. In the terminal, run `fastboot reboot` to reboot your application.
4. Re-enable USB debugging (see above).

## Root the phone (optional, since it comes in bundle with some ROMs)

https://duckduckgo.com/?q=root+blackview+a7&t=canonical&ia=web
http://neopodapsi.com/how-to-root-blackview-a7/
http://neopodapsi.com/how-to-install-adb-and-fastboot-for-blackview-a7/
http://neopodapsi.com/how-to-install-twrp-custom-recovery-on-blackview-a7-pro/
http://neopodapsi.com/?s=custom+rom++Blackview+A7
https://mobilespecs.net/phone/root/Blackview/Blackview_A7.html
https://www.stupdroid.com/2017/09/root-twrp-Blackview-A7.html
https://www.androidweblog.com/root-blackview-a7-pro-install-twrp-recovery/
https://rootmygalaxy.net/install-twrp-recovery-and-root-blackview-a7/


https://www.getdroidtips.com/root-twrp-blackview-a7/
https://www.techrrival.com/custom-recovery-android/
https://www.techrrival.com/flash-recovery-adb-fastboot/
https://www.techrrival.com/root-android-recovery/


https://twrp.me/about/

### Install SU 

https://beebom.com/cool-things-adb-lets-you-do-android-device/
https://forums.androidcentral.com/htc-one-rooting-roms-hacks/366745-root-without-using-twrp-cwm.html
In a terminal:

https://www.xda-developers.com/root/
https://www.quora.com/How-do-you-root-an-Android-phone

```
fastboot oem append-cmdline "androidboot.unlocked_kernel=true" (fails)
fastboot continue

adb reboot bootloader
adb remount
adb push su /system/xbin/su
adb shell chmod 04755 /system/xbin/su
```

https://download.lineageos.org/extras


### Install custom ROM

Right now there's no custom ROM for the Blackview A7.

Porting SlimRoms seems an interesting possibility, UbuntuTouch seems a bit heavyweight.
Or there's the option of making a new one from scratch (time consuming, win the lottery first ;-) )

https://en.wikipedia.org/wiki/List_of_custom_Android_distributions

Specs and proc:

* https://www.gsmarena.com/blackview_a7-9045.php
* http://mediatek-mobile.com/mediatek-mt6580/

SlimRoms:

* Installation instructions https://slimroms.org/#/support/install
* Source Code https://github.com/SlimRoms

GApps (Open Google Apps replacement):

* https://opengapps.org/

CarbonRom:

* Home https://www.carbonrom.org/
* Source Code https://github.com/CarbonROM

Ubuntu Touch:

* Home https://ubports.com/
* Build it https://docs.halium.org/en/latest/
* Porting, first steps (minimum 16G storage) https://docs.halium.org/en/latest/porting/first-steps.html 

## Additional interesting bits

https://droidusb.com/download-codes/blackview-a7/

Start the phone, then keep volume down key pressed. You'll get to a menu in chinese that (according to Google) translates as:
https://dictionary.writtenchinese.com/

Title: Factory mode (工 厂模式)
Options:
* Automatic testing (自动测 试) 
* Manual testing (手动测试)
* Single test (单项测试)
* Testing report (测试报告)
* Debug test item (调试测试项)
* Clear eMMC (memory) (清除 eMMC)
* Version information (版本信息 )
* Reboot phone (重启手机)