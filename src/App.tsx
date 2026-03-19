/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  Ear, 
  Wind, 
  Utensils, 
  Hand, 
  ChevronRight, 
  ChevronLeft, 
  Flower, 
  Music, 
  Sun, 
  Thermometer, 
  Apple,
  CheckCircle2,
  HelpCircle,
  Home
} from 'lucide-react';

// Types for our lesson sections
type Section = 'welcome' | 'warmup' | 'discovery' | 'practice' | 'conclusion';

const SENSES = [
  { 
    id: 'eye', 
    name: 'Mắt (Thị giác)', 
    icon: Eye, 
    function: 'Nhìn màu sắc, hình dạng, kích thước', 
    color: 'text-blue-500', 
    bg: 'bg-blue-50',
    example: 'Nhìn thấy bông hoa màu đỏ rực rỡ.'
  },
  { 
    id: 'ear', 
    name: 'Tai (Thính giác)', 
    icon: Ear, 
    function: 'Nghe âm thanh, tiếng động', 
    color: 'text-purple-500', 
    bg: 'bg-purple-50',
    example: 'Nghe tiếng chim hót líu lo.'
  },
  { 
    id: 'nose', 
    name: 'Mũi (Khứu giác)', 
    icon: Wind, 
    function: 'Ngửi mùi hương', 
    color: 'text-orange-500', 
    bg: 'bg-orange-50',
    example: 'Ngửi thấy mùi thơm của hoa nhài.'
  },
  { 
    id: 'tongue', 
    name: 'Lưỡi (Vị giác)', 
    icon: Utensils, 
    function: 'Nếm vị chua, cay, mặn, ngọt', 
    color: 'text-red-500', 
    bg: 'bg-red-50',
    example: 'Nếm thấy quả cam có vị ngọt lịm.'
  },
  { 
    id: 'skin', 
    name: 'Da (Xúc giác)', 
    icon: Hand, 
    function: 'Cảm nhận nóng, lạnh, cứng, mềm', 
    color: 'text-emerald-500', 
    bg: 'bg-emerald-50',
    example: 'Cảm nhận được nước đá lạnh buốt.'
  },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('welcome');
  const [selectedSense, setSelectedSense] = useState<string | null>(null);
  const [practiceStep, setPracticeStep] = useState(0);
  const [score, setScore] = useState(0);

  const nextSection = () => {
    if (currentSection === 'welcome') setCurrentSection('warmup');
    else if (currentSection === 'warmup') setCurrentSection('discovery');
    else if (currentSection === 'discovery') setCurrentSection('practice');
    else if (currentSection === 'practice') setCurrentSection('conclusion');
  };

  const prevSection = () => {
    if (currentSection === 'warmup') setCurrentSection('welcome');
    else if (currentSection === 'discovery') setCurrentSection('warmup');
    else if (currentSection === 'practice') setCurrentSection('discovery');
    else if (currentSection === 'conclusion') setCurrentSection('practice');
  };

  const renderWelcome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center space-y-8 text-center"
    >
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-blue-600 uppercase tracking-widest">Tự nhiên và Xã hội - Lớp 1</h2>
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">Bài 23: Các giác quan của em</h1>
        <p className="text-slate-500 max-w-lg mx-auto italic">
          "Giúp em khám phá thế giới xung quanh qua đôi mắt, đôi tai và đôi bàn tay..."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-500 w-5 h-5" /> Mục tiêu bài học
          </h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Nêu được tên, chức năng của các giác quan.</li>
            <li>• Chỉ được tên và nói chức năng của các giác quan.</li>
            <li>• Biết cách bảo vệ các giác quan.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Sun className="text-orange-500 w-5 h-5" /> Năng lực & Phẩm chất
          </h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Phát triển năng lực tự chủ và tự học.</li>
            <li>• Có ý thức giữ vệ sinh cá nhân.</li>
            <li>• Vận dụng kiến thức vào cuộc sống.</li>
          </ul>
        </div>
      </div>

      <button 
        onClick={nextSection}
        className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 group"
      >
        Bắt đầu bài học <ChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );

  const renderWarmup = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="space-y-8 max-w-3xl mx-auto"
    >
      <div className="text-center space-y-2">
        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">Hoạt động khởi động</span>
        <h2 className="text-3xl font-bold text-slate-900">Trò chơi: Thi nói nhanh</h2>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Flower size={120} className="text-pink-500" />
        </div>
        
        <div className="relative z-10 space-y-6">
          <p className="text-xl text-slate-700 leading-relaxed text-center">
            "Các bộ phận nào của cơ thể em dùng để nhận biết đặc điểm của một bông hoa?"
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['Mắt', 'Mũi', 'Tay', 'Tai', 'Lưỡi'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-800 text-sm italic">
            Gợi ý: Em có thể nhìn thấy màu sắc, ngửi thấy mùi thơm, sờ thấy cánh hoa mềm mại...
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={prevSection} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
          <ChevronLeft size={20} /> Quay lại
        </button>
        <button onClick={nextSection} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
          Tiếp theo <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );

  const renderDiscovery = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Khám phá kiến thức</span>
        <h2 className="text-3xl font-bold text-slate-900">Tên và chức năng của các giác quan</h2>
        <p className="text-slate-500">Nhấn vào từng bộ phận để tìm hiểu chức năng nhé!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SENSES.map((sense) => (
            <button
              key={sense.id}
              onClick={() => setSelectedSense(sense.id)}
              className={`p-6 rounded-2xl border-2 transition-all text-left flex items-start gap-4 ${
                selectedSense === sense.id 
                  ? `border-blue-500 ring-4 ring-blue-50 ${sense.bg}` 
                  : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className={`p-3 rounded-xl ${sense.bg} ${sense.color}`}>
                <sense.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{sense.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{sense.function}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedSense ? (
            <motion.div
              key={selectedSense}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col justify-center"
            >
              {(() => {
                const sense = SENSES.find(s => s.id === selectedSense)!;
                return (
                  <div className="space-y-6">
                    <div className={`w-20 h-20 rounded-2xl ${sense.bg} ${sense.color} flex items-center justify-center mx-auto`}>
                      <sense.icon size={48} />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">{sense.name}</h3>
                      <p className="text-lg text-blue-600 font-medium">{sense.function}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <HelpCircle size={18} className="text-slate-400" /> Ví dụ:
                      </h4>
                      <p className="text-slate-600 italic">"{sense.example}"</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {sense.id === 'eye' && <><Flower className="text-pink-400 mx-auto" /><Sun className="text-yellow-400 mx-auto" /><Apple className="text-red-400 mx-auto" /></>}
                      {sense.id === 'ear' && <><Music className="text-purple-400 mx-auto" /><Music className="text-blue-400 mx-auto" /><Music className="text-emerald-400 mx-auto" /></>}
                      {sense.id === 'nose' && <><Wind className="text-orange-400 mx-auto" /><Flower className="text-pink-400 mx-auto" /><Wind className="text-blue-400 mx-auto" /></>}
                      {sense.id === 'tongue' && <><Apple className="text-red-400 mx-auto" /><Utensils className="text-slate-400 mx-auto" /><Apple className="text-green-400 mx-auto" /></>}
                      {sense.id === 'skin' && <><Thermometer className="text-red-400 mx-auto" /><Hand className="text-emerald-400 mx-auto" /><Thermometer className="text-blue-400 mx-auto" /></>}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl h-full flex items-center justify-center p-8 text-center text-slate-400">
              <p>Chọn một giác quan bên trái để xem chi tiết</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={prevSection} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
          <ChevronLeft size={20} /> Quay lại
        </button>
        <button onClick={nextSection} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
          Tiếp theo <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );

  const renderPractice = () => {
    const questions = [
      { q: "Em dùng gì để nghe tiếng chim hót?", options: ["Mắt", "Tai", "Mũi"], correct: 1 },
      { q: "Em dùng gì để ngửi mùi thơm của hoa?", options: ["Lưỡi", "Mắt", "Mũi"], correct: 2 },
      { q: "Em dùng gì để thấy cầu vồng rực rỡ?", options: ["Mắt", "Tai", "Da"], correct: 0 },
      { q: "Em dùng gì để biết nước đá lạnh?", options: ["Mũi", "Da", "Lưỡi"], correct: 1 },
    ];

    const currentQ = questions[practiceStep];

    const handleAnswer = (idx: number) => {
      if (idx === currentQ.correct) {
        setScore(score + 1);
      }
      if (practiceStep < questions.length - 1) {
        setPracticeStep(practiceStep + 1);
      } else {
        nextSection();
      }
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider">Thực hành</span>
          <h2 className="text-3xl font-bold text-slate-900">Trò chơi: Đố bạn</h2>
          <p className="text-slate-500">Câu hỏi {practiceStep + 1} / {questions.length}</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 space-y-8">
          <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-2xl font-bold text-blue-900">{currentQ.q}</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentQ.options.map((option, idx) => (
              <motion.button
                key={option}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(idx)}
                className="p-5 bg-white border-2 border-slate-100 rounded-2xl text-lg font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all text-left flex items-center justify-between group"
              >
                {option}
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button onClick={prevSection} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium">
            <ChevronLeft size={20} /> Quay lại
          </button>
        </div>
      </motion.div>
    );
  };

  const renderConclusion = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8 max-w-4xl mx-auto text-center"
    >
      <div className="space-y-4">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-bold text-slate-900">Hoàn thành bài học!</h2>
        <p className="text-slate-500 text-lg">Em đã nắm vững kiến thức về 5 giác quan của mình.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 space-y-4">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Home className="text-blue-500" /> Hoạt động tiếp nối
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Về nhà, em hãy cùng mẹ làm một món ăn. Sau đó, hãy dùng tất cả các giác quan để cảm nhận:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><Eye size={16} className="text-blue-400" /> Nhìn màu sắc, hình dạng</li>
            <li className="flex items-center gap-2"><Wind size={16} className="text-orange-400" /> Ngửi mùi thơm</li>
            <li className="flex items-center gap-2"><Utensils size={16} className="text-red-400" /> Nếm vị của món ăn</li>
          </ul>
        </div>

        <div className="bg-blue-600 p-8 rounded-3xl shadow-lg text-white space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Sun /> Lời nhắc nhở
          </h3>
          <p className="text-blue-100 leading-relaxed">
            Hãy luôn giữ vệ sinh các giác quan sạch sẽ và bảo vệ đôi mắt của mình để tránh bị cận thị nhé!
          </p>
          <div className="pt-4 border-t border-blue-500/50">
            <p className="text-sm font-medium opacity-80 italic">"Giác quan khỏe mạnh - Bé vui khám phá!"</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          setCurrentSection('welcome');
          setPracticeStep(0);
          setScore(0);
          setSelectedSense(null);
        }}
        className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
      >
        Học lại từ đầu
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-600">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
            <span className="font-bold text-slate-800 hidden sm:inline">Tự nhiên & Xã hội</span>
          </div>
          
          <nav className="flex items-center gap-1 sm:gap-4">
            {(['welcome', 'warmup', 'discovery', 'practice', 'conclusion'] as Section[]).map((s, idx) => (
              <div 
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSection === s ? 'w-6 bg-blue-600' : 'bg-slate-200'
                }`}
              />
            ))}
          </nav>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Tuần 24 - Bài 23
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {currentSection === 'welcome' && renderWelcome()}
          {currentSection === 'warmup' && renderWarmup()}
          {currentSection === 'discovery' && renderDiscovery()}
          {currentSection === 'practice' && renderPractice()}
          {currentSection === 'conclusion' && renderConclusion()}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className="py-8 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2026 Kế hoạch bài dạy lớp 1 - Môn Tự nhiên và Xã hội</p>
      </footer>
    </div>
  );
}
