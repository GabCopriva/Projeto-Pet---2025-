import React from 'react';
import { 
  Truck, 
  LeafyGreen, 
  Clock, 
  Star,
  Facebook,
  Instagram,
  Twitter,
  PawPrint,
  Heart,
  Menu
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-10 w-10 text-purple-600" />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                PetVida
              </span>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#produtos" className="text-gray-600 hover:text-purple-600 font-medium">Produtos</a>
              <a href="#sobre" className="text-gray-600 hover:text-purple-600 font-medium">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-purple-600 font-medium">Contato</a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Comprar Agora
              </button>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <nav className="flex flex-col space-y-4">
              <a href="#produtos" className="text-gray-600 hover:text-purple-600 font-medium">Produtos</a>
              <a href="#sobre" className="text-gray-600 hover:text-purple-600 font-medium">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-purple-600 font-medium">Contato</a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Comprar Agora
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Amor e cuidado para seu 
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"> melhor amigo</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubra produtos premium selecionados com carinho para fazer seu pet mais feliz e saudável
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 text-lg font-semibold">
                  Explorar Produtos
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition duration-300 text-lg font-semibold">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80" 
                alt="Cachorro feliz"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-pink-500" />
                  <span className="font-semibold text-gray-800">+2000 Clientes Felizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10 text-purple-600" />,
                title: "Frete Grátis",
                description: "Em compras acima de R$ 150 para todo Brasil"
              },
              {
                icon: <LeafyGreen className="h-10 w-10 text-purple-600" />,
                title: "100% Natural",
                description: "Produtos selecionados com ingredientes naturais"
              },
              {
                icon: <Clock className="h-10 w-10 text-purple-600" />,
                title: "Entrega Express",
                description: "Receba em até 48 horas em sua casa"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecionamos os melhores produtos para o seu pet com qualidade e preço justo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ração Premium Plus",
                price: "R$ 129,90",
                image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80",
                tag: "Mais Vendido"
              },
              {
                name: "Brinquedo Interativo",
                price: "R$ 49,90",
                image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400&q=80",
                tag: "Novo"
              },
              {
                name: "Cama Ortopédica Luxo",
                price: "R$ 199,90",
                image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=400&q=80",
                tag: "Premium"
              },
              {
                name: "Shampoo Natural Plus",
                price: "R$ 39,90",
                image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=400&q=80",
                tag: "Orgânico"
              }
            ].map((product, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    {product.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-purple-600 font-bold text-lg mb-4">{product.price}</p>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-300">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior recompensa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
                text: "Produtos de excelente qualidade! Meu cachorro adorou a ração premium e notei uma melhora significativa em sua disposição.",
                rating: 5
              },
              {
                name: "João Santos",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                text: "Entrega super rápida e atendimento excepcional. A cama ortopédica superou minhas expectativas!",
                rating: 5
              },
              {
                name: "Ana Oliveira",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                text: "Os produtos naturais fizeram toda diferença na saúde do meu pet. Recomendo muito a PetVida!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ganhe 10% de Desconto
            </h2>
            <p className="text-gray-600 mb-8">
              Cadastre-se em nossa newsletter e receba um cupom de 10% de desconto na sua primeira compra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:ring-0 outline-none"
              />
              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition duration-300">
                Quero Desconto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <PawPrint className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">PetVida</span>
              </div>
              <p className="text-gray-400 mb-6">
                Cuidando do seu melhor amigo com amor e dedicação desde 2025.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Produtos</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Rações</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Acessórios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Brinquedos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Higiene</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition duration-300">Parcerias</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <ul className="space-y-4 text-gray-400">
                <li>contato@petvida.com.br</li>
                <li>(11) 99999-9999</li>
                <li>Av. Paulista, 1000</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PetVida. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;