import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold text-primary mb-4">
              <Zap className="h-8 w-8" />
              <span>Asimatch</span>
            </div>
            <p className="text-sm">
              アジアのビジネスマッチングを加速する
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary">サービス</a></li>
              <li><a href="#clients" className="hover:text-primary">取引先</a></li>
              <li><a href="#pricing" className="hover:text-primary">料金プラン</a></li>
              <li><a href="#about" className="hover:text-primary">会社概要</a></li>
              <li><a href="#contact" className="hover:text-primary">お問い合わせ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">所在地</h3>
            <address className="not-italic space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                〒700-0088<br />
                岡山県岡山市北区津島笹が瀬1-14
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-base-300 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Asimatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}