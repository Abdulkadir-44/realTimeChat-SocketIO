# REALTIME CHAT APPLICATION

Bu proje, kullanıcıların birbirleriyle gerçek zamanlı olarak iletişim kurmalarını sağlayan basit bir mesajlaşma uygulamasıdır. Kullanıcılar, bir sunucu üzerinde çalışan uygulamaya bağlanarak anlık mesajlar gönderebilir ve alabilirler ki bu sunucu kendi localhostunuztur(deploy etmediğiniz sürece). Uygulama, kullanıcıların kolayca birbirleriyle iletişim kurmalarını sağlamak için socket programlama kullanılarak geliştirilmiştir. Temel amacı, kullanıcıların anlık ileti alışverişi yapabilmesini sağlamaktır.Frontend kısmı için tailwind ve react,backend için express ve socket.io kullanılmıştır.

#PROJECT MATERIALS

**FRONTEND** -> [@React](https://reactjs.org/) and [@Tailwind](https://tailwindcss.com/)

**BACKEND** -> [@Express.js](https://expressjs.com/) and [@Socket.io](https://socket.io/docs/v4/client-installation/)

**ICONS** -> [@React-icons](https://www.npmjs.com/package/react-icons)

# PROJECT DETAILS

Proje dosyalarında Client ve Server adında iki adet dosya bulunmaktadır.Server kısmında projenin backend kodlamaları,Client kısmında ise frontend kodları bulunmaktadır.Frontend kısmında iki adet komponent bulunmaktadır bir tanesi login sayfası diğeri chat sayfasını oluşturmaktadır.Kullanıcıdan aldığım form değişkenlerini birden fazla komponent'de kullandığım için global olarak tanımladım ve bunu context ile yaptım ve socket programlamayı kullanacağım için socket.io-client kütüphanesini indirdim ve bağlantı oluşturdum bu yaptıklarımı backend tarafında karşılamak için socket.io kütüphanesini indirdim gerekli configürasyonları ayarladıktan sonra birbirleri ile iletişime geçmeleri için her iki tarafında(frontend ve backend) ilgili url kısmlarını belirlerdim zaten projelerim localhostum'da çalışmakta dolayısıyla bir tanesi 5173 diğer 3000 portunda çalışmakta bundan dolayı bağlantıyı kurmak tabi ki zor olmadı 

Frontend kısmında login sayfamda kullanıcıdan bir username ve roomId istemekteyim bunun amacı socket ile bağlanacak kişilerin aynı odaya bağlanmasını sağlamak yani aynı soket üzerinden iletişime geçmelerini sağlamak ve aldığım bu bilgileri global state değerlerime attıktan sonra backend tarafına gönderdim,backend tarafında bu bilgiler ve bu socket bağlantısı socket.on fonksiyonu ile dinlenmekte ve gerekli response dönderilmektedir

#Alınan cevap nasıl karşıdaki kullanıcıya yönlendiriliyor ?

Tabiki de frontend kısmından alınan roomId ile bağlantı kurulmakta ve backend kısmında bu roomdId'ye bağlanan kişilere cevap göndermek için socket.to() fonksiyonu kullanılmaktadır

Basit ve kabaca projenin özeti bu şekilde...
