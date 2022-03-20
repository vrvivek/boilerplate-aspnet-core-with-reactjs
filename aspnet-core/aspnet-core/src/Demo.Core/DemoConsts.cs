using Demo.Debugging;

namespace Demo
{
    public class DemoConsts
    {
        public const string LocalizationSourceName = "Demo";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "a43ffabeb0624f718d55d963ba4bb909";
    }
}
