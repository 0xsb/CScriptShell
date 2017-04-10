### CScriptShell, a Powershell Host running within cscript.exe

This code let's you Bypass Application Whitelisting and Powershell.exe restrictions and gives you a shell that almost looks and feels like a normal Powershell session (Get-Credential, PSSessions -> Works, Tab Completion -> Unfortunately not).
Basicly the same code as MSBuildShell (https://github.com/Cn33liz/MSBuildShell), but now using a recent technique found by @SubTee which lets you run .NET code inside JScript or VbScript.


License: BSD 3-Clause

Save These Files And Execute The Following Command:

```
Create Your Strong Name Key (using PowerShell):
$key = 'BwIAAAAkAABSU0EyAAQAAAEAAQBhXtvkSeH85E31z64cAX+X2PWGc6DHP9VaoD13CljtYau9SesUzKVLJdHphY5ppg5clHIGaL7nZbp6qukLH0lLEq/vW979GWzVAgSZaGVCFpuk6p1y69cSr3STlzljJrY76JIjeS4+RhbdWHp99y8QhwRllOC0qu/WxZaffHS2te/PKzIiTuFfcP46qxQoLR8s3QZhAJBnn9TGJkbix8MTgEt7hD1DC2hXv7dKaC531ZWqGXB54OnuvFbD5P2t+vyvZuHNmAy3pX0BDXqwEfoZZ+hiIk1YUDSNOE79zwnpVP1+BN0PK5QCPCS+6zujfRlQpJ+nfHLLicweJ9uT7OG3g/P+JpXGN0/+Hitolufo7Ucjh+WvZAU//dzrGny5stQtTmLxdhZbOsNDJpsqnzwEUfL5+o8OhujBHDm/ZQ0361mVsSVWrmgDPKHGGRx+7FbdgpBEq3m15/4zzg343V9NBwt1+qZU+TSVPU0wRvkWiZRerjmDdehJIboWsx4V8aiWx8FPPngEmNz89tBAQ8zbIrJFfmtYnj1fFmkNu3lglOefcacyYEHPX/tqcBuBIg/cpcDHps/6SGCCciX3tufnEeDMAQjmLku8X4zHcgJx6FpVK7qeEuvyV0OGKvNor9b/WKQHIHjkzG+z6nWHMoMYV5VMTZ0jLM5aZQ6ypwmFZaNmtL6KDzKv8L1YN2TkKjXEoWulXNliBpelsSJyuICplrCTPGGSxPGihT3rpZ9tbLZUefrFnLNiHfVjNi53Yg4='
$Content = [System.Convert]::FromBase64String($key)
Set-Content key.snk -Value $Content -Encoding Byte

Compile DLL within PowerShell or cmd.exe:
C:\Windows\Microsoft.NET\Framework64\v3.5\csc.exe /r:System.EnterpriseServices.dll,System.Management.Automation.dll /target:library /out:CScriptShell.dll /keyfile:key.snk CScriptShell.cs

To load the JScriptShell from the Commandline:
cscript.exe CScriptShell.js
```

More info on this Bypass can be found in the following Blogpost from @SubTee: http://subt0x10.blogspot.nl/2017/04/extending-jscript-with.html

Powershell Host Code: Original from Microsoft (MSDN), modified by Cn33liz, Twitter: @Cneelis

Note: This will only work on if .NET 3.5 is installed.