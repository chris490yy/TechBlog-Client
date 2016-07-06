import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $ from "jquery";
require('../../../styles/singlArticlePage.style.css');
// require('../../../styles/index.style.css');


class SingleArticlePageComponent extends React.Component{

	constructor(){

		super();

	}

	render(){
		return (
			<div class="singleArticleContainer demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--black-100 ">
			<header class="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
			<div class="mdl-layout__header-row">
			<span class="mdl-layout-title">Material Design Lite</span>
			<div class="mdl-layout-spacer"></div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
			<label class="mdl-button mdl-js-button mdl-button--icon" for="search">
			<i class="material-icons">search</i>
			</label>
			<div class="mdl-textfield__expandable-holder">
			<input class="mdl-textfield__input" type="text" id="search"/>

			<label class="mdl-textfield__label" for="search">Enter your query...</label>

			</div>
			</div>
			</div>
			</header>
			<div class="demo-ribbon"></div>
			<main class="demo-main mdl-layout__content">
			<div class="demo-container mdl-grid">
			<div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
			<div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
			<div class="demo-crumbs mdl-color-text--grey-500">
			Google &gt; Material Design Lite &gt; How to install MDL
			</div>
			<h3>How to install MDL</h3>
			<p>
			Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.
			</p>
			<p>
			Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.
			</p>
			<p>
			Tempor tempor aliqua in commodo cillum Lorem magna dolore proident Lorem. Esse ad consequat est excepteur irure eu irure quis aliqua qui. Do mollit esse veniam excepteur ut veniam anim minim dolore sit commodo consequat duis commodo. Sunt dolor reprehenderit ipsum minim eiusmod eu consectetur anim excepteur eiusmod. Duis excepteur anim dolor sit enim veniam deserunt anim adipisicing Lorem elit. Cillum sunt do consequat elit laboris nisi consectetur.
			</p>
			<h3>Basic MDL Usage</h3>
			<p>
			Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.
			</p>
			<p>
			Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.
			</p>
			<p>
			Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.
			</p>
			<p>
			Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.
			</p>
			<p>
			Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.
			</p>
			<p>
			Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.
			</p>
			<p>
			Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.
			</p>
			<p>
			Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.
			</p>
			</div>
			</div>
			<footer class="demo-footer mdl-mini-footer">
			<div class="mdl-mini-footer--left-section">
			<ul class="mdl-mini-footer--link-list">
			<li><a href="#">Help</a></li>
			<li><a href="#">Privacy and Terms</a></li>
			<li><a href="#">User Agreement</a></li>
			</ul>
			</div>
			</footer>
			</main>
			</div>
			)
}
}

export default SingleArticlePageComponent;
