/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface TS {
  title:string
}

class Component <TS> {
  constructor (public props:TS) {

  }

}

class Page extends Component<TS> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};