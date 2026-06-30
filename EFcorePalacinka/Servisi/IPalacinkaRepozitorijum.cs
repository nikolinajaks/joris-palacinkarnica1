using EFcorePalacinka.Model;

namespace EFcorePalacinka.Servisi
{
    public interface IPalacinkaRepozitorijum
    {
        List<Palacinka> VratiSve();
        Palacinka VratiJednu(int id);
        void DodajPalacinku(Palacinka p);
        void ObrisiPalacinku(int id);
        void  AzurirajPalacinku(int id, Palacinka p);

    }
}
