using EFcorePalacinka.Model;
using Microsoft.EntityFrameworkCore;
namespace EFcorePalacinka.Data
{
    public class PalacinkarnicaContext:DbContext
    {
        public PalacinkarnicaContext() { }
        public PalacinkarnicaContext(DbContextOptions<PalacinkarnicaContext> options) : base(options) { }
        public DbSet<Palacinka> Palacinka { get; set; } = null;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (optionsBuilder.IsConfigured == false)
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectModels;Initial Catalog=PretposlednjaDB;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
        }
    }
}
