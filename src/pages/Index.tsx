import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeTab, setActiveTab] = useState('feed')

  // Mock data
  const contentItems = [
    {
      id: 1,
      type: 'question',
      title: 'Как выбрать технологический стек для стартапа?',
      content: 'Запускаю новый проект и размышляю между React и Vue. Какие критерии важны при выборе?',
      author: 'alexdev',
      nest: 'Разработка',
      likes: 24,
      answers: 8,
      timestamp: '2 часа назад'
    },
    {
      id: 2,
      type: 'blog',
      title: 'Путь к Senior Developer: личный опыт',
      content: 'Поделюсь своим путем от джуна до сеньора за 4 года. Основные ошибки, уроки и прозрения...',
      author: 'mariakod',
      nest: 'Карьера в IT',
      likes: 156,
      comments: 23,
      timestamp: '5 часов назад'
    },
    {
      id: 3,
      type: 'channel',
      title: 'Новости AI: GPT-5 анонсирован',
      content: 'OpenAI официально анонсировала GPT-5 с возможностями мультимодального анализа',
      author: 'aiwatch',
      nest: 'Искусственный интеллект',
      likes: 89,
      shares: 12,
      timestamp: '1 час назад'
    }
  ]

  const popularNests = [
    { name: 'Разработка', members: '12.5k', color: 'bg-purple-500' },
    { name: 'Дизайн', members: '8.2k', color: 'bg-pink-500' },
    { name: 'Стартапы', members: '15.1k', color: 'bg-emerald-500' },
    { name: 'AI/ML', members: '9.8k', color: 'bg-amber-500' }
  ]

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'question': return 'MessageCircleQuestion'
      case 'blog': return 'FileText'
      case 'channel': return 'Megaphone'
      default: return 'MessageCircle'
    }
  }

  const getContentColor = (type: string) => {
    switch (type) {
      case 'question': return 'border-l-purple-500 bg-purple-50'
      case 'blog': return 'border-l-emerald-500 bg-emerald-50'
      case 'channel': return 'border-l-amber-500 bg-amber-50'
      default: return 'border-l-gray-500 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Sova
                </span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                {[
                  { id: 'feed', label: 'Лента', icon: 'Home' },
                  { id: 'nests', label: 'Гнёзда', icon: 'Users' },
                  { id: 'search', label: 'Поиск', icon: 'Search' },
                  { id: 'profile', label: 'Профиль', icon: 'User' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      activeTab === tab.id 
                        ? 'bg-gradient-primary text-white' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <Icon name={tab.icon} size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-primary hover:opacity-90 text-white">
              <Icon name="Plus" size={16} className="mr-2" />
              Создать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'feed' && (
        <div className="bg-gradient-hero py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Спроси. Создай. Найди своё.
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-slide-up">
              Платформа, где вопросы превращаются в дискуссии, а эксперты делятся знаниями
            </p>
            <div className="max-w-2xl mx-auto relative animate-scale-in">
              <Input 
                placeholder="О чём хотите узнать больше?"
                className="h-14 pr-12 text-lg bg-white/90 backdrop-blur-sm border-0"
              />
              <Button size="sm" className="absolute right-2 top-2 bg-purple-600 hover:bg-purple-700">
                <Icon name="Search" size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'feed' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Лента</h2>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-purple-50">
                      Популярное
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-purple-50">
                      Новое
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-purple-50">
                      Обсуждаемое
                    </Badge>
                  </div>
                </div>

                {contentItems.map(item => (
                  <Card key={item.id} className={`border-l-4 ${getContentColor(item.type)} hover:shadow-lg transition-all cursor-pointer`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-white">
                            <Icon name={getContentIcon(item.type)} size={20} className="text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Avatar className="w-5 h-5">
                                  <AvatarFallback className="text-xs">
                                    {item.author[0].toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{item.author}</span>
                              </div>
                              <span>•</span>
                              <Badge variant="secondary" className="text-xs">
                                {item.nest}
                              </Badge>
                              <span>•</span>
                              <span>{item.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-700 mb-4">{item.content}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1 hover:text-purple-600 cursor-pointer">
                          <Icon name="Heart" size={16} />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-purple-600 cursor-pointer">
                          <Icon name={item.type === 'question' ? 'MessageCircle' : 'MessageSquare'} size={16} />
                          <span>{item.answers || item.comments || item.shares}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-purple-600 cursor-pointer">
                          <Icon name="Share" size={16} />
                          <span>Поделиться</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'nests' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Популярные Гнёзда</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {popularNests.map(nest => (
                    <Card key={nest.name} className="hover:shadow-lg transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${nest.color} rounded-xl flex items-center justify-center`}>
                            <span className="text-white font-bold text-lg">
                              {nest.name[0]}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{nest.name}</h3>
                            <p className="text-gray-500">{nest.members} участников</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'search' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Поиск</h2>
                <div className="relative">
                  <Input 
                    placeholder="Найти вопросы, блоги, каналы..."
                    className="h-12 pr-12 text-lg"
                  />
                  <Button size="sm" className="absolute right-2 top-2">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
                <div className="text-center py-12 text-gray-500">
                  <Icon name="Search" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Введите запрос для поиска контента</p>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-2xl">У</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Пользователь</h2>
                    <p className="text-gray-500">Участник с января 2024</p>
                    <div className="flex space-x-4 mt-2">
                      <Badge variant="secondary">5 вопросов</Badge>
                      <Badge variant="secondary">12 ответов</Badge>
                      <Badge variant="secondary">3 блога</Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Мои Гнёзда</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularNests.slice(0, 3).map(nest => (
                  <div key={nest.name} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <div className={`w-8 h-8 ${nest.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">
                        {nest.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{nest.name}</p>
                      <p className="text-xs text-gray-500">{nest.members}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Трендовые теги</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'AI', 'Дизайн', 'Стартап', 'Web3'].map(tag => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-purple-100">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}