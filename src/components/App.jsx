import Header from './Header/Header';
import MyConponent from './MyConponent/MyConponent';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div
            style={{
              padding: 20,
              maxWidth: 400,
              margin: '0 auto',
            }}
          >
            <h1>Section title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dignissimos sapiente in at ipsum modi nihil, aliquam accusamus
              saepe sed aspernatur cumque. Sapiente, dignissimos dolores sequi
              maxime atque nobis earum.
            </p>
            <MyConponent />
          </div>
        </section>
      </main>
    </>
  );
};
