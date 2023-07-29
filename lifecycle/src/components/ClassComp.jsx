import { Component } from 'react';

//* constructor: Bileşen oluşturulduğunda ilk çağrılan yöntemdir
//* render(): Bileşenin arayüzünü oluşturmak için çağrılır ve jsx kodu return eder

export class Sayac extends Component {
  constructor(props) {
    // miras alma
    super(props);
    // state tanımlama
    this.state = {
      count: 0,
    };
    console.log('constructor çalıştı');
  }

  // bileşenin ekrana gelme anını izlemeye yarar
  componentDidMount() {
    console.log('Component did Mount çalıştı ');
  }

  // bileşenin içerisindeki state değiştiğinde çalışır
  componentDidUpdate() {
    console.log('Component did Update çalştı');
  }

  // bileşenin ekrandan ayrılma olayını izler
  componentWillUnmount() {
    console.log('Component will Unmount çalştı');
  }

  // butona tıklanınca çalışır
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render çalıştı');
    return (
      <div>
        <p>Bu butona {this.state.count} kez tıklandı</p>

        <button onClick={this.handleClick}>Arttır</button>
      </div>
    );
  }
}
