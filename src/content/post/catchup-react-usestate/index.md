---
title: "useState()について学びを整理"
description: "ReactのuseState()について、その概要と基本的な挙動をハンズオン形式でまとめている記事です。"
publishDate: "2023 10 19"
tags: ["React", "学習記録"]
---

いままで雰囲気で使っていたuseState()がどんなものかについてある程度理解できたので、雑にしたためておきます。

## 1.useStateとはなにか？

`useState`は、状態の変化を検知し、コンポーネントの再レンダリングを行う特別な関数（hooks）です。<br />

ボタンのクリックやフォーム入力等のユーザーアクションに合わせて画面を更新したいことがよくあると思いますが、そういう時にめちゃくちゃ便利ってわけです。

これがuseStateの基本的な記法↓

```js
const [val, setVal] = useState(0);
```

useStateはこういう風に配列を持つんですね。0番目に値そのもの`val`が入り、1番目には更新用の関数`setVal`を持ちます。

更新用の関数名は、値の名前に`set`を付け足して表現します。<br />
あと、`useState(0)`のように初期値を設定することが多いです。初期値なしでもエラーは出ませんが、その場合は`undefined`が初期値になります。

## useStateの基本的な使い方

useStateの基本的な使い方を、ボタンを押すたびに数値が1づつ増減する簡単なカウンター関数を作って確認していきます。

```js
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const countUp = () => {
		setCount(count + 1);
	};
	const countDown = () => {
		setCount(count - 1);
	};

	return (
		<>
			<span>{count}</span>
			<div>
				<button onClick={countUp}>+</button>
				<button onClick={countDown}>-</button>
			</div>
		</>
	);
};
```

こんな感じです。値に対し`+1`するハンドラと`-1`するハンドラを用意して、それぞれのボタンのonClick()に仕込んでいます。処理の流れとしては、ボタンのクリック-> countUp()/Down()発火 -> setCount()発火 -> そしてsetCount()内で行っている処理によって、ペアになっている値`count`が書き換わり、非同期でコンポーネントも再レンダリングされるという感じです。

### ポイント

- 更新される値のことを**state**と呼ぶ
- stateは**非同期で再実行（レンダリング）される**
  <br />

あとはReactはツリー構造の位置でStateを識別してるとか、コンポーネントが消えた後もstateを保持し続ける方法とか色々と学んだのですが、このあたりはまた今度まとめることします。
