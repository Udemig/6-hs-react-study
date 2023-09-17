import { toast } from 'react-toastify';
import { auth, db } from './../firebase/config';
import { BsCardImage } from 'react-icons/bs';
import {
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

const TweetForm = () => {
  console.log(auth.currentUser);
  // kollkesiyonu referans alma
  const tweetsCol = collection(db, 'tweets');

  // formun gönderilmesi
  const handleSubmit = async (e) => {
    e.preventDefault();
    const textContent = e.target[0].value;
    const imageContent = e.target[1].files[0];

    if (!textContent) {
      toast.info('Tweet içeriği ekleyin..');
      return;
    }

    // tweeti kollkesiyona ekleme
    await addDoc(tweetsCol, {
      textContent,
      imageContent: null,
      createdAt: serverTimestamp(),
      user: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
    });

    // inputları sıfırla
    e.target[0].value = '';
    e.target[1].value = null;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-b-2 border-b-gray-800"
    >
      <img
        className="rounded-full h-[50px]"
        src={auth.currentUser?.photoURL}
      />

      <div className="w-full">
        <input
          placeholder="Neler Oluyor?"
          className="w-full bg-transparent my-2 outline-none placeholder:text-lg"
          type="text"
        />

        <div className="flex h-[45px] items-center justify-between">
          <div className="hover:bg-gray-800 transition p-4 cursor-pointer rounded-full">
            <label htmlFor="picture">
              <BsCardImage />
            </label>

            <input className="hidden" id="picture" type="file" />
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-full transition hover:bg-blue-500">
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
