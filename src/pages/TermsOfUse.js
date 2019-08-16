import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class TermsOfUse extends Component {
	render() {

		const { container, content, txt } = styles;

		return (
      <View style={container}>
        <HeaderComponent headerText={'Terms'} />
        <View style={content}>
          <ScrollView>
            <Text style={txt}>
              Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
              Quem num gosta di mé, boa gentis num é. Leite de capivaris, leite de mula manquis sem cabeça. Paisis, filhis, espiritis santis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
              Si num tem leite então bota uma pinga aí cumpadi! Sapien in monti palavris qui num significa nadis i pareci latim. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Delegadis gente finis, bibendum egestas augue arcu ut est.
              Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Mé faiz elementum girarzis, nisi eros vermeio. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
              Viva Forevis aptent taciti sociosqu ad litora torquent. Detraxit consequat et quo num tendi nada. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
              Aenean aliquam molestie leo, vitae iaculis nisl. Suco de cevadiss deixa as pessoas mais interessantis. Manduma pindureta quium dia nois paga. Per aumento de cachacis, eu reclamis.
              Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Pra lá , depois divoltis porris, paradis. Quem num gosta di mim que vai caçá sua turmis! Casamentiss faiz malandris se pirulitá.
              A ordem dos tratores não altera o pão duris. Atirei o pau no gatis, per gatis num morreus. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Interagi no mé, cursus quis, vehicula ac nisi.
              Copo furadis é disculpa de bebadis, arcu quam euismod magna. In elementis mé pra quem é amistosis quis leo. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Diuretics paradis num copo é motivis de denguis.
              Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
              Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss deixa as pessoas mais interessantis.
              Manduma pindureta quium dia nois paga. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. A ordem dos tratores não altera o pão duris.
              Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Atirei o pau no gatis, per gatis num morreus. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Diuretics paradis num copo é motivis de denguis.
              Quem num gosta di mé, boa gentis num é. Viva Forevis aptent taciti sociosqu ad litora torquent. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
              Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Pra lá , depois divoltis porris, paradis. Aenean aliquam molestie leo, vitae iaculis nisl.
              Casamentiss faiz malandris se pirulitá. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.  Si num tem leite então bota uma pinga aí cumpadi!
              Delegadis gente finis, bibendum egestas augue arcu ut est. Mé faiz elementum girarzis, nisi eros vermeio. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Per aumento de cachacis, eu reclamis.
              Interagi no mé, cursus quis, vehicula ac nisi. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. In elementis mé pra quem é amistosis quis leo.
            </Text>
          </ScrollView>
        </View>
      </View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		alignItems: 'center'
	},
	txt: {
		padding: 10
	}
});