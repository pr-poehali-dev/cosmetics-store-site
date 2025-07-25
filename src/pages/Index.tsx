import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "ЗОЛОТЫЕ ПАТЧИ",
      subtitle: "24K GOLD SERIES",
      category: "Уход за глазами",
      price: "12 900 ₽",
      originalPrice: "15 900 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "ОГРАНИЧЕННАЯ СЕРИЯ",
      inStock: true,
      exclusive: true
    },
    {
      id: 2,
      name: "ПЛАТИНОВАЯ МАСКА",
      subtitle: "INSTANT GLOW EFFECT", 
      category: "Уход за лицом",
      price: "8 500 ₽",
      originalPrice: "11 200 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "BESTSELLER",
      inStock: true,
      exclusive: false
    },
    {
      id: 3,
      name: "БРИЛЛИАНТОВАЯ СЫВОРОТКА",
      subtitle: "DIAMOND DROPS",
      category: "Anti-age",
      price: "24 900 ₽",
      originalPrice: "29 900 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "VIP ТОЛЬКО",
      inStock: false,
      exclusive: true
    },
    {
      id: 4,
      name: "КОРОЛЕВСКИЙ КРЕМ",
      subtitle: "ROYAL HANDS THERAPY",
      category: "Уход за руками",
      price: "6 900 ₽",
      originalPrice: "8 500 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "NEW",
      inStock: true,
      exclusive: false
    },
    {
      id: 5,
      name: "ЧЕРНАЯ МАГИЯ",
      subtitle: "DETOX CLEANSER RITUAL",
      category: "Очищение",
      price: "4 200 ₽", 
      originalPrice: "5 800 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "TOP CHOICE",
      inStock: true,
      exclusive: false
    },
    {
      id: 6,
      name: "СОЛНЕЧНЫЙ ЩИТ",
      subtitle: "SPF 50+ LUXURY PROTECTION",
      category: "Защита",
      price: "7 800 ₽",
      originalPrice: "9 400 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "ЛЕТНИЙ ХИТ",
      inStock: true,
      exclusive: false
    }
  ];

  const categories = [
    { 
      name: "ПАТЧИ & МАСКИ", 
      subtitle: "Мгновенный результат",
      count: "12 эксклюзивных формул",
      gradient: "from-amber-400 via-yellow-400 to-amber-600"
    },
    { 
      name: "СЫВОРОТКИ", 
      subtitle: "Концентрат молодости",
      count: "8 революционных средств",
      gradient: "from-purple-400 via-pink-400 to-red-400"
    },
    { 
      name: "ОЧИЩЕНИЕ", 
      subtitle: "Ритуал красоты",
      count: "15 средств премиум-класса",
      gradient: "from-blue-400 via-cyan-400 to-teal-400"
    },
    { 
      name: "ЗАЩИТА", 
      subtitle: "Щит от времени",
      count: "6 инновационных формул",
      gradient: "from-emerald-400 via-green-400 to-lime-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, 
              rgba(212, 175, 55, 0.3) 0%, 
              rgba(255, 215, 0, 0.2) 25%, 
              transparent 50%)`
          }}
        ></div>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-amber-400/20 backdrop-blur-2xl bg-black/80 sticky top-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-12">
              <div className="relative group">
                <div className="text-4xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent animate-pulse">
                  VSHELL
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-600 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
              </div>
              <nav className="hidden lg:flex space-x-10">
                <a href="#catalog" className="text-amber-400 hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide hover:scale-110">
                  КОЛЛЕКЦИЯ
                </a>
                <a href="#experience" className="text-amber-400 hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide hover:scale-110">
                  ОПЫТ
                </a>
                <a href="#vip" className="text-amber-400 hover:text-yellow-300 transition-all duration-300 text-sm font-medium tracking-wide hover:scale-110">
                  VIP КЛУБ
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-xs text-amber-400/80 font-mono">
                {currentTime.toLocaleTimeString('ru-RU')}
              </div>
              <Button variant="ghost" size="sm" className="text-amber-400 hover:text-yellow-300 hover:bg-amber-400/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-amber-400 hover:text-yellow-300 hover:bg-amber-400/10 relative">
                <Icon name="ShoppingBag" size={20} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-xs text-black font-bold">
                  2
                </div>
              </Button>
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-8 py-3 rounded-full relative overflow-hidden group">
                <span className="relative z-10">VIP ДОСТУП</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-yellow-500/20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`transform transition-all duration-2000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-400/30 mb-8">
                  <span className="text-amber-400 text-sm font-semibold tracking-wide">ЭКСКЛЮЗИВНО В РОССИИ</span>
                </div>
                
                <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-none">
                  <span className="block bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                    НЕ
                  </span>
                  <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent animate-pulse">
                    КОСМЕТИКА
                  </span>
                  <span className="block text-white text-4xl font-light mt-4">
                    А ФИЛОСОФИЯ КРАСОТЫ
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  Мы не продаём крема. Мы продаём <span className="text-amber-400 font-semibold">трансформацию</span>.
                  Каждый продукт — это <span className="text-yellow-400 font-semibold">революция</span> в мире ухода.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-3">
                      ИЗМЕНИТЬ ЖИЗНЬ
                      <Icon name="Sparkles" size={24} />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
                    <Icon name="Play" size={24} className="mr-3" />
                    СМОТРЕТЬ МАГИЮ
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div className="group cursor-pointer">
                    <div className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">99.7%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Результат за 24ч</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-3xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">№1</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Премиум в России</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-3xl font-black text-amber-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Гарантия качества</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-2000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-3xl">
                  <img 
                    src="/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg" 
                    alt="VSHELL Premium Experience" 
                    className="w-full rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-2xl font-bold text-white mb-2">ЗОЛОТАЯ СЕРИЯ</div>
                    <div className="text-amber-400 text-sm">Эксклюзивно для VIP клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Categories */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">
              ВЫБЕРИТЕ СВОЮ
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                ТРАНСФОРМАЦИЮ
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Каждая категория — это уникальный опыт, созданный для тех, кто не готов на компромиссы
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-75 blur transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 group-hover:border-amber-400/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-amber-400 text-sm font-semibold">{category.subtitle}</p>
                    </div>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500`}>
                      <Icon name="Sparkles" size={24} className="text-black" />
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">{category.count}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">Премиум класс</span>
                    <Icon name="ArrowRight" size={20} className="text-amber-400 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Products */}
      <section id="catalog" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-400/30 mb-8">
              <span className="text-amber-400 text-sm font-semibold tracking-wide">ОГРАНИЧЕННАЯ КОЛЛЕКЦИЯ</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6">
              ЭТО НЕ ПРОСТО
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                КОСМЕТИКА
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Это инвестиция в себя. Каждый продукт создан для тех, кто понимает разницу между обычным и исключительным.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={product.id} className={`group cursor-pointer transform hover:scale-105 transition-all duration-500 ${index < 2 ? 'lg:col-span-1' : ''}`}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-amber-400/50 transition-all duration-300">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6">
                      {product.exclusive && (
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-black px-3 py-2 rounded-full mb-2">
                          VIP ТОЛЬКО
                        </div>
                      )}
                      <div className="bg-black/80 backdrop-blur-sm text-amber-400 text-xs font-semibold px-3 py-2 rounded-full border border-amber-400/30">
                        {product.discount}
                      </div>
                    </div>
                    
                    {/* Wishlist */}
                    <div className="absolute top-6 right-6">
                      <Button variant="ghost" size="sm" className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm hover:bg-amber-400/20 border border-amber-400/30">
                        <Icon name="Heart" size={20} className="text-amber-400" />
                      </Button>
                    </div>
                    
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-amber-400 text-lg font-bold mb-2">SOLD OUT</div>
                          <div className="text-gray-400 text-sm">Следующая партия в разработке</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold">{product.category}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={12} className="text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-amber-400 text-sm font-semibold mb-6">{product.subtitle}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-black text-white">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-3">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold py-4 rounded-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
                      disabled={!product.inStock}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {product.inStock ? (
                          <>
                            <Icon name="ShoppingCart" size={20} />
                            ИЗМЕНИТЬ ЖИЗНЬ
                          </>
                        ) : (
                          "УВЕДОМИТЬ О ПОСТУПЛЕНИИ"
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-16 py-6 rounded-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-3">
                ОТКРЫТЬ ВСЮ КОЛЛЕКЦИЮ
                <Icon name="Crown" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* VIP Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-yellow-900/20 to-amber-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-400/30 mb-8">
                <span className="text-amber-400 text-sm font-semibold tracking-wide">VIP ОПЫТ</span>
              </div>
              
              <h2 className="text-5xl font-black text-white mb-8">
                МЫ НЕ ПРОДАЁМ
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  ПРОДУКТЫ
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Мы продаём <span className="text-amber-400 font-bold">трансформацию</span>. 
                Наши клиенты не покупают крем — они инвестируют в новую версию себя.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Crown" size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Персональный консультант</h3>
                    <p className="text-gray-400">Индивидуальный подбор под ваш тип кожи и образ жизни</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Sparkles" size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Результат за 24 часа</h3>
                    <p className="text-gray-400">Или мы вернём 200% стоимости</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Shield" size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Пожизненная гарантия</h3>
                    <p className="text-gray-400">На качество и эффективность каждого продукта</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
                СТАТЬ VIP КЛИЕНТОМ
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-amber-400/30">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Award" size={48} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Сертификат премиального качества</h3>
                  <p className="text-gray-400">
                    Каждый продукт проходит 47 ступеней контроля качества. 
                    Мы не производим — мы создаём шедевры.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-black text-amber-400">100%</div>
                    <div className="text-xs text-gray-400 uppercase">Натуральные компоненты</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-yellow-400">0</div>
                    <div className="text-xs text-gray-400 uppercase">Химических добавок</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-amber-400">∞</div>
                    <div className="text-xs text-gray-400 uppercase">Эффективность</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-yellow-900/30 to-amber-900/30"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-6">
            ГОТОВЫ К
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              ТРАНСФОРМАЦИИ?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Первые 100 человек получают эксклюзивный доступ к закрытой коллекции 
            и персональную консультацию с нашим ведущим экспертом.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Ваш email для эксклюзивного доступа"
              className="flex-1 px-6 py-4 bg-black/50 border-2 border-amber-400/30 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 rounded-full backdrop-blur-sm"
            />
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
              ИЗМЕНИТЬ ЖИЗНЬ
            </Button>
          </div>
          
          <div className="text-sm text-gray-400">
            Осталось мест: <span className="text-amber-400 font-bold">47</span> из 100
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="vip" className="bg-gradient-to-br from-gray-900 to-black py-20 border-t border-amber-400/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-4xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent mb-6">
                VSHELL
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Мы не просто бренд косметики. Мы — философия красоты, 
                воплощённая в каждом продукте.
              </p>
              <div className="flex space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <Icon name="Instagram" size={20} className="text-black" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <Icon name="Facebook" size={20} className="text-black" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300">
                  <Icon name="Youtube" size={20} className="text-black" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-6 uppercase tracking-wide">Коллекции</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Золотая серия</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Платиновая коллекция</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Бриллиантовые сыворотки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">VIP доступ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-6 uppercase tracking-wide">VIP Поддержка</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-amber-400" />
                  <span>+7 (999) PREMIUM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-amber-400" />
                  <span>vip@vshell.beauty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-amber-400" />
                  <span>Москва, премиум офис</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-amber-400" />
                  <span>24/7 для VIP клиентов</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-400/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">© 2024 VSHELL. Не просто косметика — философия красоты.</p>
              <div className="flex space-x-8 text-sm">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Конфиденциальность VIP</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Условия трансформации</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;