let badusb = require("badusb");

print("wsadSpammer");

badusb.setup({
    vid: 0x0483,
    pid: 0xA27B,
    mfr_name: "Flipper Zero",
    prod_name: "BadUSB",
    layout: "/ext/badusb/assets/layouts/en-US.kl"
});

delay(2000);
while (!badusb.isConnected()) delay(500);
print("Connected - Arrow circles");

// Infinite keyboard circles (active window focus)
while (true) {
    // Circle pattern with arrow keys
    badusb.hold("d"); delay(4000); badusb.release("d"); delay(200);
    badusb.hold("s"); delay(4000); badusb.release("s"); delay(200);
    badusb.hold("a"); delay(4000); badusb.release("a"); delay(200);
    badusb.hold("s"); delay(4000); badusb.release("s"); delay(200);
    badusb.hold("a"); delay(4000); badusb.release("a"); delay(200);
    badusb.hold("w"); delay(4000); badusb.release("w"); delay(200);
    badusb.hold("d"); delay(4000); badusb.release("d"); delay(200);
    badusb.hold("w"); delay(4000); badusb.release("w"); delay(200);
    
    delay(1000);  // Circle complete
}

badusb.quit();
