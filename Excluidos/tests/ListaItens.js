onLearnMore = (item) => {
    this.props.navigation.navigate('DetalhesItem', item);
};

render() {

    if(this.state.listaItens.length > 0){
    return(
        <View>
            <View>
                <InputSearch />
            </View>

            <ScrollView>

                {this.state.listaItens.map((item, i) => {
                    return (<View key={i}>
                        <TouchableOpacity onPress={() => this.onLearnMore(item)}>
                        <Itens key={item.id} item={item} />
                        </TouchableOpacity>
                    </View>)
                })}
            </ScrollView>
        </View>