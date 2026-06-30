using EFcorePalacinka.Data;
using EFcorePalacinka.Model;

namespace EFcorePalacinka.Servisi
{
    public class EFcoreRepozitorijum:IPalacinkaRepozitorijum
    {
        private readonly PalacinkarnicaContext context;
        public EFcoreRepozitorijum(PalacinkarnicaContext context) { this.context = context; }
        public List<Palacinka> VratiSve()
        {
            return context.Palacinka.ToList();
        }
        public Palacinka VratiJednu(int id)
        {
            return context.Palacinka.Find(id);
        }
        public void DodajPalacinku(Palacinka p)
        {
            context.Palacinka.Add(p);
            context.SaveChanges();
        }
        public void ObrisiPalacinku(int id)
        {
            var brisanje = context.Palacinka.Find(id);
            if (brisanje == null) return;
            context.Palacinka.Remove(brisanje);
            context.SaveChanges() ;
        }
        public void AzurirajPalacinku(int id, Palacinka p)
        {
            var azuriraj = context.Palacinka.Find(id);
            if (azuriraj == null) return;
            azuriraj.Cena=p.Cena;
            azuriraj.Naziv=p.Naziv;
            azuriraj.Sastojci=p.Sastojci;
            azuriraj.Tip=p.Tip;
            context.SaveChanges();
        }
    }
}
