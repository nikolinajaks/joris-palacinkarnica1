using EFcorePalacinka.Model;
using EFcorePalacinka.Servisi;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFcorePalacinka.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PalacinkiceController : ControllerBase
    {
        private readonly IPalacinkaRepozitorijum repozitorijum;
        public PalacinkiceController(IPalacinkaRepozitorijum repozitorijum)
        {
            this.repozitorijum = repozitorijum;
        }

        [HttpGet]
        public List<Palacinka> GetAll()
        {
            return repozitorijum.VratiSve();
        }

        // GET api/<PalacinkiceController>/5
        [HttpGet("{id}")]
        public ActionResult<Palacinka> Get(int id)
        {
            var palacinka= repozitorijum.VratiJednu(id);
            if(palacinka==null) return NotFound();
            return palacinka;

        }

        // POST api/<PalacinkiceController>
        [HttpPost]
        public void Post([FromBody] Palacinka p)
        {
            repozitorijum.DodajPalacinku(p);
        }

        // PUT api/<PalacinkiceController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Palacinka p)
        {
            repozitorijum.AzurirajPalacinku(id,p);
        }

        // DELETE api/<PalacinkiceController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repozitorijum.ObrisiPalacinku(id);
        }
    }
}
