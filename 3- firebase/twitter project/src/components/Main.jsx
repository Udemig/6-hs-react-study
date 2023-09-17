import { useEffect, useState } from 'react';
import TweetForm from './TweetForm';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import Post from './Post';

const Main = () => {
  const [tweets, setTweets] = useState(null);
  const tweetCol = collection(db, 'tweets');

  useEffect(() => {
    // kolleksiyondaki değişimi izler
    onSnapshot(tweetCol, (snapshot) => {
      // geçici olarak tweetleri tutuğumuz dizi
      const tempTweets = [];

      //  document'leri dönüp ihityacımız olan bilgilerini diziye aktrıytoruz
      snapshot.forEach((doc) =>
        tempTweets.push({ ...doc.data(), id: doc.id })
      );

      //   state'e tweet'leri aktarma
      setTweets(tempTweets);
    });
  }, []);

  return (
    <main className="col-span-3 md:col-span-2 xl:col-span-1  border border-gray-800">
      <header className="font-bold p-4 border-b-2 border-gray-800">
        Anasayfa
      </header>
      <TweetForm />

      {/* LOADİNG */}
      {!tweets && (
        <p className="text-center mt-[200px]">Yükleniyor...</p>
      )}

      {/* tweetleri listeleme */}
      {tweets.map((tweet) => (
        <Post key={tweet.id} tweet={tweet} />
      ))}
    </main>
  );
};

export default Main;
