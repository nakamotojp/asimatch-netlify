import { Building, FileText, User, Calendar, Coins, MapPin } from 'lucide-react';

export function CompanyInfo() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <Building className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">会社名</h3>
            <p>アジマッチ有限会社</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <User className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">代表者名</h3>
            <p>中本賢吾</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <Calendar className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">設立</h3>
            <p>2005年10月6日</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <Coins className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">資本金</h3>
            <p>3,000,000円</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <MapPin className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">所在地</h3>
            <p>〒700-0088 岡山県岡山市北区津島笹が瀬1-14</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <FileText className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">インボイス</h3>
            <p>T6260002015510</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body flex flex-row items-center gap-4">
          <FileText className="text-primary h-8 w-8" />
          <div>
            <h3 className="font-semibold text-lg">SECURITY ACTION ID</h3>
            <p>40156499898</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
        <div className="card-body">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7123670856365!2d133.91731687677566!3d34.68511657292829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355407c90b760f93%3A0x8b8b0b0b0b0b0b0b!2z44CSNzAwLTAwODgg5bKh5bGx55yM5bKh5bGx5biC5YyX5Yy65rWc5bO25p2-44GM54Cs77yR4oiS77yR77yU!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}