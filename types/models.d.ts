declare type KnownRoute = 'start' | 'your-cart' | 'favourites' | 'your-orders'

declare interface IRouteData {
  label: string
  route: KnownRoute
}

declare interface IRoutesMap {
  [key: KnownRoute]: string
}
