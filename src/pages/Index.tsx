import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Помада матовая LUXE",
      category: "Губы",
      price: "1,290₽",
      originalPrice: "1,590₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-19%",
      inStock: true
    },
    {
      id: 2,
      name: "Палетка теней PRO",
      category: "Глаза",
      price: "2,150₽",
      originalPrice: "2,890₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-26%",
      inStock: true
    },
    {
      id: 3,
      name: "Тональный крем HD",
      category: "Лицо",
      price: "1,850₽",
      originalPrice: "2,290₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-19%",
      inStock: false
    },
    {
      id: 4,
      name: "Хайлайтер GLOW",
      category: "Лицо",
      price: "990₽",
      originalPrice: "1,290₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-23%",
      inStock: true
    },
    {
      id: 5,
      name: "Тушь объемная MEGA",
      category: "Глаза",
      price: "1,190₽",
      originalPrice: "1,490₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-20%",
      inStock: true
    },
    {
      id: 6,
      name: "Румяна компактные",
      category: "Лицо",
      price: "890₽",
      originalPrice: "1,190₽",
      image: "/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg",
      discount: "-25%",
      inStock: true
    }
  ];

  const categories = [
    { name: "Лицо", icon: "Sparkles", count: "120+" },
    { name: "Глаза", icon: "Eye", count: "85+" },
    { name: "Губы", icon: "Smile", count: "64+" },
    { name: "Ногти", icon: "Hand", count: "42+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                VSHELL
              </div>
              <Badge variant="secondary" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white">
                Премиум косметика
              </Badge>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-pink-600 transition-colors">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">О бренде</a>
              <a href="#contacts" className="text-gray-700 hover:text-pink-600 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingBag" size={16} />
              </Button>
              <Button className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  VSHELL
                </span>
                <br />
                <span className="text-gray-900">Beauty</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Премиальная косметика для создания безупречного образа. 
                Качество, проверенное временем.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-lg px-8">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} />
                  Посмотреть видео
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={16} />
                  <span>Быстрая доставка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-400 blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="/img/df59a5f5-3466-4bf9-a908-8beb769f9538.jpg" 
                alt="VSHELL косметика" 
                className="relative rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории товаров</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Откройте для себя широкий ассортимент косметики для любого случая
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover-scale cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-pink-200 group-hover:to-blue-200 transition-colors">
                    <Icon name={category.icon as any} size={28} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные товары</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые востребованные продукты нашей коллекции
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover-scale overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-blue-500">
                      {product.discount}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary">Нет в наличии</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{product.category}</Badge>
                    <Icon name="Heart" size={16} className="text-gray-400 hover:text-pink-500 cursor-pointer" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? (
                      <>
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </>
                    ) : (
                      "Сообщить о поступлении"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Показать все товары
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О бренде VSHELL</h2>
              <p className="text-gray-600 mb-6">
                VSHELL — это премиальный бренд косметики, который создает продукты высочайшего качества 
                для современных женщин. Мы используем только лучшие ингредиенты и инновационные технологии.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-pink-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">300+</div>
                  <div className="text-sm text-gray-600">товаров в каталоге</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-600 mb-2">50k+</div>
                  <div className="text-sm text-gray-600">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">4.9</div>
                  <div className="text-sm text-gray-600">рейтинг качества</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-blue-400/20 blur-2xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <Icon name="Award" size={48} className="text-pink-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Сертификат качества</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Вся наша продукция сертифицирована и соответствует международным стандартам качества
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                VSHELL
              </div>
              <p className="text-gray-400 mb-4">
                Премиальная косметика для создания безупречного образа
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-pink-400 cursor-pointer" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Лицо</a></li>
                <li><a href="#" className="hover:text-white">Глаза</a></li>
                <li><a href="#" className="hover:text-white">Губы</a></li>
                <li><a href="#" className="hover:text-white">Ногти</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Возврат</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@vshell.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 VSHELL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;