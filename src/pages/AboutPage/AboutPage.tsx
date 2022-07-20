import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="phase-box">
          <h3>The First Phase</h3>
          <p>
            In the first phase of the app it will be possible to connect to a
            database which fetches Kanji information from <b>kanjiapi.dev</b>
            .The main features implemented during this phase are the
            randomization of three kanji per day or each 24 hours. This means
            that users will have 24 hours to learn a specific Kanji and then
            move on to the next set of three Kanji.
          </p>
        </div>

        <div className="phase-box">
          <h3>The Second Phase</h3>
          <p>
            In the second phase of the app it will be possible to log in and
            create an user account. With this feature, the user will have{" "}
            <b>hiragana</b> and <b>katakana</b> learning pages available. The
            user will have the possibility to create a favourite Kanji set.
          </p>
        </div>

        <div className="phase-box">
          <h3>The Third Phase</h3>
          <p>
            In the first phase of the app it will be possible to connect to a
            database which fetches Kanji information from <b>kanjiapi.dev</b>
            .The main features implemented during this phase are the
            randomization of three kanji per day or each 24 hours. This means
            that users will have 24 hours to learn a specific Kanji and then
            move on to the next set of three Kanji.
          </p>
        </div>
      </section>
    </>
  );
}
