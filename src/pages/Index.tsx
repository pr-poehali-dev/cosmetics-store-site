import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Матовая помада LUXE",
      category: "Губы",
      price: "1 290 ₽",
      originalPrice: "1 590 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-19%",
      inStock: true
    },
    {
      id: 2,
      name: "Палетка теней PRO",
      category: "Глаза", 
      price: "2 150 ₽",
      originalPrice: "2 890 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-26%",
      inStock: true
    },
    {
      id: 3,
      name: "Тональный крем HD",
      category: "Лицо",
      price: "1 850 ₽",
      originalPrice: "2 290 ₽", 
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-19%",
      inStock: false
    },
    {
      id: 4,
      name: "Хайлайтер GLOW",
      category: "Лицо",
      price: "990 ₽",
      originalPrice: "1 290 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-23%",
      inStock: true
    },
    {
      id: 5,
      name: "Объемная тушь MEGA",
      category: "Глаза",
      price: "1 190 ₽", 
      originalPrice: "1 490 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-20%",
      inStock: true
    },
    {
      id: 6,
      name: "Компактные румяна",
      category: "Лицо",
      price: "890 ₽",
      originalPrice: "1 190 ₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-25%",
      inStock: true
    }
  ];

  const categories = [
    { name: "Лицо", count: "120 товаров" },
    { name: "Глаза", count: "85 товаров" },
    { name: "Губы", count: "64 товара" },
    { name: "Ногти", count: "42 товара" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-medium text-black tracking-wide">
                VSHELL
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#catalog" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">КАТАЛОГ</a>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">О БРЕНДЕ</a>
                <a href="#contacts" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">КОНТАКТЫ</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                <Icon name="Search" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black">
                <Icon name="ShoppingBag" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-black mb-8 leading-tight">
                Красота<br />
                в деталях
              </h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-md">Бренд премиальной косметики. Создаем продукты для тех, кто ценит качество и элегантность.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-900 rounded-none px-8 py-4">
                  СМОТРЕТЬ КАТАЛОГ
                </Button>
                <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white rounded-none px-8 py-4">
                  О БРЕНДЕ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg" 
                  alt="VSHELL косметика" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-black mb-6">Категории</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент косметики для создания безупречного образа
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center cursor-pointer group">
                <div className="bg-white rounded-none shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                  <h3 className="text-lg font-medium text-black mb-2 group-hover:underline">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-black mb-6">Популярные товары</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые востребованные продукты нашей коллекции
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white text-xs px-2 py-1 font-medium">
                        {product.discount}
                      </span>
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                      <span className="text-gray-600 text-sm font-medium">НЕТ В НАЛИЧИИ</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
                    <Icon name="Heart" size={16} className="text-gray-400 hover:text-black cursor-pointer" />
                  </div>
                  <h3 className="text-lg font-medium text-black group-hover:underline">{product.name}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-medium text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    className="w-full mt-4 bg-black text-white hover:bg-gray-900 rounded-none py-3"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "В КОРЗИНУ" : "СООБЩИТЬ О ПОСТУПЛЕНИИ"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white rounded-none px-12 py-4">
              ПОКАЗАТЬ ВСЕ ТОВАРЫ
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-black mb-8">О бренде VSHELL</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                VSHELL — российский бренд премиальной косметики, который создает продукты 
                высочайшего качества для современных людей, ценящих элегантность и стиль.
              </p>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Мы используем только лучшие ингредиенты и инновационные технологии, 
                чтобы каждый продукт отражал нашу философию совершенства.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-light text-black mb-2">5+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">лет на рынке</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-2">300+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">товаров</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-2">50K+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">клиентов</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-black mb-2">4.9</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">рейтинг</div>
                </div>
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg" 
                alt="О бренде VSHELL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-6">Будьте в курсе новинок</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых коллекциях, 
            специальных предложениях и эксклюзивных акциях.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-black hover:bg-gray-100 rounded-none px-8 py-3">
              ПОДПИСАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-medium text-black mb-6">VSHELL</div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Российский бренд премиальной косметики
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-black cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-black cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-black cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Каталог</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Лицо</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Глаза</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Губы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Ногти</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Поддержка</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Доставка и оплата</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Возврат товара</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Частые вопросы</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black text-sm">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Контакты</h3>
              <div className="space-y-3 text-sm">
                <div className="text-gray-600">+7 (999) 123-45-67</div>
                <div className="text-gray-600">info@vshell.ru</div>
                <div className="text-gray-600">Москва, Россия</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">© 2024 VSHELL. Все права защищены.</p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-black">Политика конфиденциальности</a>
                <a href="#" className="text-gray-500 hover:text-black">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;