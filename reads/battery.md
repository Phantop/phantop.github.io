[Source](https://community.frame.work/t/battery-life/861/12)

For Linux you have much more control if you wanted to control the power envelope yourself. you can use the sysfs interface for the intel-rapl driver to adjust the power limits:
Eg you can set your PL1 (long term) and PL2 (short term) power limits in uW:
echo 1 > /sys/class/powercap/intel-rapl:0/enabled
#PL1
echo 28000000 > /sys/class/powercap/intel-rapl:0/constraint_0_power_limit_uw
#PL2
echo 64000000 > /sys/class/powercap/intel-rapl:0/constraint_1_power_limit_uw

From what I have found there is not a good way for the major window managers to control power profiles that are built into gnome/kde/etc. But it would be interesting to explore more.
You can read about the interface here, it is pretty cool because you can also use this to monitor power usage too:
https://www.kernel.org/doc/html/latest/power/powercap/powercap.html

There are a few mentions of intel projects for linux.

https://01.org/linux-thermal-daemon/documentation/introduction-thermal-daemon

https://github.com/intel/dptf

https://01.org/blogs/2014/running-average-power-limit-%E2%80%93-rapl
