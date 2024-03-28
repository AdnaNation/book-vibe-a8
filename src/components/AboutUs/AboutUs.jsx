const AboutUs = () => {
  return (
    <div className="p-4 space-y-2">
      <h2>Welcome to Book Vibe!</h2>
      We are a passionate group of book lovers dedicated to fostering a vibrant
      online community where readers can discover new favorites, connect with
      fellow bibliophiles, and share their love of literature.
      <h3>Our Story:</h3>
      <p>
        Bookworm Haven was born from one simple desire: to create a space where
        book enthusiasts could come together, lose themselves in the joy of
        reading, and explore the boundless world of storytelling. We believe
        that books have the power to transport us to different times and places,
        challenge our perspectives, and enrich our lives in countless ways.
      </p>
      <h3>What Makes Us Unique:</h3>
      <li>
        Curated Book Lists: Our team of avid readers handpicks a selection of
        captivating books every month, catering to diverse tastes and genres.
        From hidden gems by independent authors to timeless classics, we have
        something for everyone.
      </li>
      <li>
        Engaging Book Reviews: We offer insightful and engaging reviews that go
        beyond plot summaries. We delve into themes, characters, and writing
        styles, helping you decide which books to add to your ever-growing TBR
        (to-be-read) pile.
      </li>
      <li>
        Thriving Book Club: Our online book club is a haven for passionate
        readers to discuss their recent reads, share recommendations, and engage
        in lively literary conversations.
      </li>
      <h3>Our Values:</h3>
      <h3>At Book Vibe, we believe in:</h3>
      <li>
        Promoting a love of reading: We want to inspire individuals of all ages
        to discover the magic of books.
      </li>
      <li>
        Supporting independent authors: We highlight the works of talented,
        independent voices alongside established authors.
      </li>
      <li>
        Creating a welcoming community: We strive to foster a supportive and
        inclusive online space where everyone feels comfortable sharing their
        thoughts and opinions.
      </li>
      <h3>Join the Book Vibe Family!</h3>
      <p>
        <span className="text-bold text-slate-950 text-xl bg-slate-300 ">
          Sign up for our newsletter
        </span>
        to receive personalized book recommendations, stay updated on literary
        news, and get exclusive access to book club events. Follow us on social
        media for engaging bookish content and daily doses of literary
        inspiration.
      </p>
      <h1 className="text-center underline text-2xl">Sign up here</h1>
      <label className="input input-bordered flex items-center gap-2 mt-3 md:mx-40">
        <input type="text" className="grow" placeholder="Email" />
        <button className="btn btn-secondary">Subscribe</button>
      </label>
    </div>
  );
};

export default AboutUs;
