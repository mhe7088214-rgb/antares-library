"use client";
import React, { useState } from 'react';
import { BookOpen, Star, Shield, Plus, Bookmark, Eye, Heart } from 'lucide-react';

export default function AntaresPlatform() {
  const [activeTab, setActiveTab] = useState<'home' | 'reader' | 'admin'>('home');
  const [selectedNovel, setSelectedNovel] = useState<any>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);

  const [novels, setNovels] = useState([
    {
      id: 1,
      title: 'Magic Emperor',
      author: 'Zhuo Yifan',
      category: 'Xianxia / Action',
      rating: 4.9,
      views: '1.2M',
      description: 'إمبراطور السحر يسعى للانتقام وإعادة بناء قوته من الصفر باستخدام أساليب شيطانية محرمة.',
      cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600',
      chapters: [
        { id: 101, title: 'الفصل 1: إعادة الولادة', content: 'في هذا الفصل، يستيقظ إمبراطور السحر في خادم عائلة جوو...' },
        { id: 102, title: 'الفصل 2: القوة الشيطانية', content: 'بدأ تجميع الطاقة الإلهية داخل الجسد الضعيف...' }
      ]
    },
    {
      id: 2,
      title: 'Absolute Regression',
      author: 'Crazy Blade',
      category: 'Martial Arts / Fantasy',
      rating: 4.8,
      views: '850K',
      description: 'بعد السقوط في معركة الفصائل الشيطانية، يعود سياف الدماء إلى الماضي ممتلكاً خطة للانتقام.',
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600',
      chapters: [
        { id: 201, title: 'الفصل 1: العودة بالزمن', content: 'فتح عينيه ليرى نفسه قبل 20 عاماً من الكارثة...' }
      ]
    },
    {
      id: 3,
      title: 'Crow Clan Chronicles',
      author: 'Anis',
      category: 'Dark Fantasy / System',
      rating: 5.0,
      views: '420K',
      description: 'صعود العشيرة المحرمة وسط الصراعات العائلية ومهارات البرق الذهبي.',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600',
      chapters: [
        { id: 301, title: 'الفصل 1: سليل الغراب', content: 'في ظلال عشيرة الغراب، اندلعت الشرارة الأولى لمهارة البرق الذهبي...' }
      ]
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddNovel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newAuthor) return;
    const novelObj = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
      category: newCategory || 'Fantasy',
      rating: 5.0,
      views: '0',
      description: 'رواية جديدة مضافة حديثاً إلى المنصة.',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600',
      chapters: []
    };
    setNovels([novelObj, ...novels]);
    setNewTitle('');
    setNewAuthor('');
    setNewCategory('');
    alert('تمت إضافة الرواية بنجاح إلى قاعدة البيانات!');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans pb-16">
      <nav className="border-b border-neutral-800 bg-neutral-900/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab('home'); setSelectedNovel(null); }}>
            <span className="text-2xl font-black text-amber-500 tracking-wider">ANTARES</span>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold">Novella Vault</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <button 
              onClick={() => { setActiveTab('home'); setSelectedNovel(null); }}
              className={`px-4 py-2 rounded-lg transition ${activeTab === 'home' ? 'bg-amber-500 text-black font-bold' : 'hover:text-amber-400'}`}>
              المكتبة
            </button>
            <button 
              onClick={() => setActiveTab('admin')}
              className={`px-4 py-2 rounded-lg transition flex items-center gap-1.5 ${activeTab === 'admin' ? 'bg-amber-500 text-black font-bold' : 'hover:text-amber-400'}`}>
              <Shield className="w-4 h-4" /> لوحة التحكم
            </button>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && !selectedNovel && (
        <main className="max-w-7xl mx-auto px-6 py-10">
          <section className="relative rounded-3xl bg-gradient-to-r from-amber-950/40 via-neutral-900 to-neutral-900 border border-neutral-800 p-8 md:p-12 mb-12">
            <span className="text-amber-500 text-xs font-bold tracking-wider uppercase mb-2 block">Novella Vault System</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              منصة الروايات الرقمية والويب نوفل
            </h1>
            <p className="text-neutral-400 text-sm md:text-base max-w-2xl mb-6">
              تصفح أحدث الروايات المبتكرة والمترجمة، واصل قراءة الفصول، وتابع تحديثات العشائر والفانتازيا أولاً بأول.
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-500 rounded-full inline-block"></span>
            الروايات المتاحة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {novels.map((novel) => (
              <div key={novel.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col justify-between">
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img src={novel.cover} alt={novel.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-neutral-950/90 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-neutral-700 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {novel.rating}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md inline-block mb-3">
                      {novel.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{novel.title}</h3>
                    <p className="text-xs text-neutral-400 mb-3">الكاتب: <span className="text-neutral-200">{novel.author}</span></p>
                    <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-4">{novel.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => setSelectedNovel(novel)}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4" /> تصفح الرواية والفصول
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {selectedNovel && (
        <main className="max-w-5xl mx-auto px-6 py-10">
          <button 
            onClick={() => { setSelectedNovel(null); setSelectedChapter(null); }}
            className="text-neutral-400 hover:text-amber-400 text-sm mb-6 flex items-center gap-1 transition">
            ← العودة إلى قائمة الروايات
          </button>

          {!selectedChapter ? (
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <img src={selectedNovel.cover} alt={selectedNovel.title} className="w-full md:w-56 h-80 object-cover rounded-2xl border border-neutral-700" />
                <div>
                  <span className="text-xs font-semibold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-md inline-block mb-3">
                    {selectedNovel.category}
                  </span>
                  <h1 className="text-3xl font-bold text-white mb-2">{selectedNovel.title}</h1>
                  <p className="text-sm text-neutral-400 mb-4">المؤلف: <span className="text-amber-400">{selectedNovel.author}</span></p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">{selectedNovel.description}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 border-b border-neutral-800 pb-3">الفصول المتاحة</h3>
              <div className="space-y-3">
                {selectedNovel.chapters.length > 0 ? (
                  selectedNovel.chapters.map((chap: any) => (
                    <div 
                      key={chap.id}
                      onClick={() => setSelectedChapter(chap)}
                      className="p-4 bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 rounded-xl cursor-pointer flex justify-between items-center transition">
                      <span className="font-semibold text-sm text-neutral-200">{chap.title}</span>
                      <span className="text-xs text-amber-500 font-bold">قراءة ←</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-neutral-500">لا توجد فصول مرفوعة لهذه الرواية بعد.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12">
              <button 
                onClick={() => setSelectedChapter(null)}
                className="text-xs text-amber-500 mb-6 block">
                ← العودة إلى قائمة فصول {selectedNovel.title}
              </button>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">{selectedChapter.title}</h2>
              <div className="text-neutral-300 leading-loose text-base whitespace-pre-line">
                {selectedChapter.content}
              </div>
            </div>
          )}
        </main>
      )}

      {activeTab === 'admin' && (
        <main className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Shield className="text-amber-500" /> لوحة إدارة منصة Antares
            </h2>
            <p className="text-xs text-neutral-400 mb-8">إضافة روايات جديدة وإدارة الفصول وقاعدة البيانات.</p>

            <form onSubmit={handleAddNovel} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">اسم الرواية</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="مثال: Crow Clan Chronicles" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">اسم الكاتب / المؤلف</label>
                <input 
                  type="text" 
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="اسم المؤلف" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">التصنيف (Category)</label>
                <input 
                  type="text" 
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Xianxia / Dark Fantasy / System" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 mt-4">
                <Plus className="w-5 h-5" /> حفظ ونشر الرواية على المنصة
              </button>
            </form>
          </div>
        </main>
      )}
    </div>
  );
}
