---
date: 2021-01-11T20:54:01.975Z
title: How to upgrade to PowerShell 7 and PnP Powershell
description: A guide on how to upgrade till PowerShell 7
category: PowerShell
---
So like everyone knows PnP Powershell is being rewritten from .net 4.6.1 to .net 2.0 standard. Bad news is that the current powershell that comes with windows 10 won't be supported anymore, good news?  Powershell 7 and multi OS support, which means you can use PnP and PowerShell on OSX and Linux. :D

So what's needed  ?

Well first we need to download the package for PowerShell 7 from their github:, 

<https://github.com/PowerShell/PowerShell/releases/>

[https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.]([](https://github.com/PowerShell/PowerShell/releases/)https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)

Download the PowerShell-7.X.X-XXX-win-x64.msi Just to make it easier to install :) 

![](../assets/powershell-install-1.png)

![](../assets/powershell-install..png)

After this let's start PowerShell 7 and build the new PnP Module! :D

![](../assets/powershell-7.png)

Let's download the PnP powershell from their github:

https://github.com/pnp/powershell

To make it easy for us let's just download from releases using github, this way I can use git to fetch new changes and build the module :) 

Start PowerShell 7 and run this line of code:

```powershell
 Install-Module -Name "PnP.PowerShell" -AllowPrerelease  -AllowClobber
```



![](../assets/install-pnppowershell.png)

Now that PnP powershell is installed, we need to configure it to authenticate with Azure/M365

https://pnp.github.io/powershell/articles/authentication.html

Run:

```powershell
 Register-PnPManagementShellAccess
```

![](../assets/loginpromt.png)

![](../assets/permissions-pnp.png)

Accept the permissions and then you can start using your PnP powershell as usual :) 



<!--EndFragment-->

Resource:

https://pnp.github.io/powershell/index.html