import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">CoolReg Enerji</h3>
            <p className="text-muted-foreground mb-4">
              CoolReg ısıtma soğutma sistemleri ve elektrik üretimi konularında yenilenebilir enerji kaynakları 
              (biokütle, jeotermal, güneş enerjisi) ve endüstriyel atık ısı kaynaklarını kullanarak ORC teknolojisini 
              özgün türbin teknolojisiyle uygulayarak tasarımını üretimini ve bakımlarını yapabilen Türk firmasıdır.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="liquid-button text-muted-foreground hover:text-primary transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="liquid-button text-muted-foreground hover:text-primary transition-colors">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="liquid-button text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">İletişim</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>+90 (224) 483 58 83</p>
              <p>info@cool-reg.com</p>
              <p className="text-sm">
                Çalı Mah. Gri Cad. No:5<br />
                Nilüfer/BURSA
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CoolReg Enerji. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}