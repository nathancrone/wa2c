using Microsoft.AspNet.Mvc;

namespace wa2c.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}