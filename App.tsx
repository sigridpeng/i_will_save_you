
import React from 'react';
import { Terminal, Calendar, User, Tag, Play, ExternalLink, Info, Image as ImageIcon } from 'lucide-react';
import GlitchTitle from './components/GlitchTitle';
import { GameData } from './types';

const GAME_CONTENT: GameData = {
  title: "拯救之命 I Will Save You",
  tagline: "真相不是答案，而是代價。",
  developer: "Classam",
  publisher: "Classam Indie Works",
  releaseDate: "即將推出 / Coming Soon",
  tags: [
    "變格推理", "多重結局", "輪迴敘事",
    "自由探索", "視覺小說", "獨立遊戲",
    "暴風雨山莊", "Meta 解謎"
  ],
  description: "一場無法僅靠「找出兇手」就能解決的命案。\n\n《拯救之命 I Will Save You》是一款結合變格推理、多輪迴敘事與自由探索系統的劇情向獨立遊戲。玩家將在封閉空間中進行調查、懷疑、指認與選擇——然而，找出兇手並不代表故事結束。\n\n遊戲採用多輪迴設計。每一次「重新開始」都將可能改變規則與可見資訊。\n\n第一輪，你只能看見表層真相。多次結局之後，你將逐步解鎖新的能力與路徑。真相並非單一答案，而是一層層揭開動機與因果。\n\n玩家可在特定時間軸中自由行動，觀察角色動向、觸發事件與隱藏對話。探索不僅影響結局，也影響世界對玩家的回應。",
  videoId: "4LMOlHE-QhU",
  screenshots: [
    "/boat_cabin.jpg",
    "/playroom_puzzle.jpg",
    "/screenshot0001.jpg",
    "/screenshot0002.jpg",
    "/screenshot0003.jpg"
  ]
};

const App: React.FC = () => {
  const game = GAME_CONTENT;

  return (
    <div className="min-h-screen selection:bg-hacker selection:text-tar">
      {/* 導覽列 */}
      <header
        className="border-b border-hacker/30 sticky top-0 z-40 backdrop-blur-md bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/導覽列背景.jpg")' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between bg-tar/40">
          <div className="flex items-center">
            <img src="/標題文字.png" alt="拯救之命" className="h-12 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest text-hacker/70">
            <a href="#about" className="hover:text-hacker transition-colors">關於遊戲</a>
            <a href="#media" className="hover:text-hacker transition-colors">媒體庫</a>
            <a href="#contact" className="hover:text-hacker transition-colors">聯繫開發者</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* 標題與標語 */}
        <section className="space-y-6">
          <GlitchTitle text={game.title} className="mb-2" />
          <div className="flex items-center space-x-4">
            <div className="h-[2px] w-12 bg-hacker/50"></div>
            <p className="text-xl md:text-3xl font-bold tracking-wider text-hacker/90 font-sans italic">
              {game.tagline}
            </p>
          </div>
        </section>

        {/* 主要展示區：影片與資訊列表 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 左側：影片展示 */}
          <div className="lg:col-span-8 aspect-video bg-tar-light border border-hacker/20 relative group overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${game.videoId}?autoplay=0&mute=1&rel=0`}
              title="遊戲預告片"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* 右側：遊戲資訊 */}
          <div className="lg:col-span-4 flex flex-col space-y-8 h-full">
            <div className="bg-tar-light/50 border border-hacker/30 p-8 space-y-8 flex-grow relative shadow-2xl">
              <div className="absolute top-0 right-0 p-2 text-[10px] text-hacker/20 font-mono">FILE_ID: SAVE_YOU_001</div>

              <h3 className="text-sm font-black uppercase tracking-[0.3em] flex items-center text-hacker/40">
                <Info className="w-4 h-4 mr-2" />
                項目資訊
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] text-hacker/40 font-mono">DEVELOPER</span>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-hacker" />
                    <span className="font-bold text-lg">{game.developer}</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-1">
                  <span className="text-[10px] text-hacker/40 font-mono">RELEASE_STATUS</span>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-hacker" />
                    <span className="font-bold text-lg">{game.releaseDate}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-hacker/10">
                  <span className="text-[10px] text-hacker/40 font-mono mb-4 block text-center">CORE_TAGS</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {game.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold border border-hacker/20 px-3 py-1 bg-hacker/5 hover:bg-hacker/20 hover:border-hacker transition-all cursor-crosshair">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 快速按鈕 */}
            <button className="w-full bg-hacker text-tar font-black py-4 tracking-[0.5em] hover:brightness-125 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] flex items-center justify-center space-x-3">
              <Play className="w-5 h-5 fill-current" />
              <span>立即預約</span>
            </button>
          </div>
        </section>

        {/* 內容區：關於遊戲 */}
        <section id="about" className="relative">
          <div className="absolute -left-10 top-0 text-[120px] font-black text-hacker/[0.03] select-none pointer-events-none -z-10 tracking-tighter">
            ABOUT_FILE
          </div>
          <div className="bg-tar-light border border-hacker/10 p-10 md:p-16 space-y-10 shadow-2xl relative">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-10 bg-hacker"></div>
              <h2 className="text-3xl font-black tracking-widest uppercase">
                關於《拯救之命》
              </h2>
            </div>

            <div className="max-w-4xl space-y-8">
              {game.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-hacker/80 text-lg leading-relaxed font-sans font-medium indent-8">
                  {para}
                </p>
              ))}
            </div>

            {/* 裝飾線條 */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-hacker/30 to-transparent"></div>
          </div>
        </section>

        {/* 媒體庫：圖片網格 */}
        <section id="media" className="space-y-10">
          <div className="flex items-center justify-between border-b border-hacker/20 pb-4">
            <h2 className="text-2xl font-black tracking-[0.2em] flex items-center">
              <ImageIcon className="w-6 h-6 mr-3" />
              視覺存檔 VISUAL_LOGS
            </h2>
            <span className="text-[10px] font-mono text-hacker/30 uppercase tracking-[0.5em]">6_ITEMS_FOUND</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {game.screenshots.map((src, i) => (
              <div key={i} className="aspect-video bg-tar-light border border-hacker/20 overflow-hidden group relative cursor-zoom-in">
                <img
                  src={src}
                  alt={`遊戲截圖 ${i + 1}`}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[10px] border-tar/0 group-hover:border-hacker/10 transition-all pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-tar/80 px-2 py-1 text-[8px] font-mono border border-hacker">
                  DATA_FRAME: 00{i + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 頁底 CTA */}
        <section id="contact" className="py-24 border-t border-hacker/10 flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase glitch-text" data-text="立即遊玩">
              立即遊玩
            </h2>
            <p className="text-hacker/50 font-mono text-sm tracking-[0.3em] uppercase">ACCESS_GRANTED: NO_RESTRICTIONS</p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-hacker blur-2xl opacity-20 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
            <button
              disabled
              className="relative px-20 py-6 bg-hacker/20 text-hacker/40 font-black text-2xl tracking-[0.5em] cursor-not-allowed border border-hacker/20 flex items-center space-x-4"
            >
              <Play className="w-8 h-8 fill-current opacity-20" />
              <span>即將推出</span>
            </button>
          </div>

          <div className="pt-20 text-center">
            <a
              href="mailto:sigridpeng.dev@gmail.com"
              className="text-hacker/60 font-mono text-lg tracking-widest hover:text-hacker transition-colors border-b border-hacker/20 pb-1"
            >
              sigridpeng.dev@gmail.com
            </a>
          </div>
        </section>
      </main>

      {/* 底部裝飾 */}
      <footer className="bg-tar p-10 text-center border-t border-hacker/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-hacker/30 space-y-4 md:space-y-0">
          <span>&copy; 2024 CLASSAM INDIE WORKS. ALL_RIGHTS_RESERVED.</span>
          <div className="flex space-x-6">
            <span className="animate-pulse">TERMINAL_VERSION: 1.0.4-STABLE</span>
            <span>UPLINK: 0MS</span>
          </div>
        </div>
      </footer>

      {/* 固定裝飾角落 */}
      <div className="fixed top-6 right-6 z-50 pointer-events-none opacity-20 hidden lg:block">
        <div className="w-24 h-24 border-t border-r border-hacker"></div>
      </div>
      <div className="fixed bottom-6 left-6 z-50 pointer-events-none opacity-20 hidden lg:block">
        <div className="w-24 h-24 border-b border-l border-hacker"></div>
      </div>
    </div>
  );
};

export default App;
