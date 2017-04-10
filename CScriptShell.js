var a = new ActiveXObject("System.EnterpriseServices.RegistrationHelper");
try
{
	a.InstallAssembly("CScriptShell.dll", null, null, 0 );
}
catch (e)
{
	
}