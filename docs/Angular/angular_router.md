---
sidebar_position: 9
description: Angular Router
---

# Router

## 子路由設定

透過 `children` 屬性定義下一層的路由資訊。

```TypeScript
{
  path: 'pokemon',
  children: [
    {
      path: 'list',
      component: PokemonListComponent
    },
    {
      path: 'info',
      component: PokemonInfoComponent
    }
  ],
}
```

在 `pokemon` 這層路由沒有指定對應的元件時，那該頁面就需要有 `<router-outlet></router-outlet>` 指令來顯示下層路由的頁面。

## 延遲載入

為提升效能，可利用 `Router` 的延遲載入機制，在使用者點選頁面時，才載入對應的 `JavaScript` 檔案。

```TypeScript
{
  path: 'pokemon',
  children: [
    {
      path: 'list',
      loadChildren: () => import('./pokemon-list.module').then(m => m.PokemonListModule)
    },
    {
      path: 'info',
      component: PokemonInfoComponent
    }
  ],
}
```
