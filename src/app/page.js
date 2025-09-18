import Link from "next/link";
import GlassButton from "../components/GlassButton";
import DarkVeil from "../components/DarkVeil";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section with DarkVeil Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{ paddingTop: 0 }}>
        {/* DarkVeil background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -10 }}>
          <DarkVeil 
            hueShift={30}
            noiseIntensity={0.1}
            scanlineIntensity={0.2}
            speed={0.5}
            scanlineFrequency={0.5}
            warpAmount={0.1}
            resolutionScale={1}
          />
        </div>
        
        <div className="container relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              CoolReg Enerji
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Yenilenebilir enerji kaynakları ile ısıtma, soğutma ve elektrik üretimi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
              <GlassButton href="/products" variant="light" size="lg">
                Ürünlerimizi İncele
              </GlassButton>
              <GlassButton href="/contact" variant="dark" size="lg">
                İletişime Geç
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              CoolReg Enerji Hakkında
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              CoolReg ısıtma soğutma sistemleri ve elektrik üretimi konularında yenilenebilir enerji kaynakları 
              (biokütle, jeotermal, güneş enerjisi) ve endüstriyel atık ısı kaynaklarını kullanarak ORC teknolojisini 
              özgün türbin teknolojisiyle uygulayarak tasarımını üretimini ve bakımlarını yapabilen Türk firmasıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ürünlerimiz
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CoolReg Heat Pumps */}
            <div className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  CoolReg Heat Pumps
                </h3>
                <p className="text-muted-foreground text-sm">
                  Hava kaynaklı ısı pompaları dış havadan gelen ısıyı emer. Bu ısı daha sonra evinizdeki radyatörleri, yerden ısıtma sistemlerini ısıtmak için kullanılabilir.
                </p>
              </div>
            </div>

            {/* CoolReg Power */}
            <div className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  CoolReg Power
                </h3>
                <p className="text-muted-foreground text-sm">
                  Türbin üretimi ve montajı yaparak hem ısıtma-soğutma-sıcak su hemde elektik üreten ısı pompası üretimi yapmaktayız.
                </p>
              </div>
            </div>

            {/* CoolReg ORC */}
            <div className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  CoolReg ORC
                </h3>
                <p className="text-muted-foreground text-sm">
                  Günümüzde enerji teknolojilerinde önemli bir etken olarak öne çıkan ORC sistemleri son yıllarda oldukça yaygınlaşmaktadır.
                </p>
              </div>
            </div>

            {/* CoolReg Solar */}
            <div className="glass rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  CoolReg Solar
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yoğunlaştırılmış termal güneş enerjisi santralleri (CSP) yenilenebilir ısı enerjisi ya da elektrik enerjisi kaynağı olarak kullanılırlar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Renewable Energy Section */}
      <section className="section bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden Yenilenebilir Enerji Sistemleri?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CoolReg Heat Pumps</h3>
              <p className="text-muted-foreground text-sm">
                Isıtma,soğutma,sıcak su ihtiyaçlarını tek bir üniteden gerçekleştiren monoblok cihazlar.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CoolReg Power</h3>
              <p className="text-muted-foreground text-sm">
                İklimlendirme ihtiyaçları ile birlikte elektrik üreten monoblok cihazlar.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CoolReg ORC</h3>
              <p className="text-muted-foreground text-sm">
                Güneş enerjisi ve atık ısılardan elektrik üreten turbin ve iklimlendirme sistemleri.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">CoolReg Solar</h3>
              <p className="text-muted-foreground text-sm">
                Güneş enerjisinden elektrik ve yüksek ısı üretebilmek için CSP (Consantra güneş enerji) ve takip sistemleri.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}