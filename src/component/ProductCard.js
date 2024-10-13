import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { buy, selectItems, selectValue, sell } from '../redux/Money/MoneySlice'

function ProductCard({ item }) {


    const dispatch = useDispatch();
    const products = useSelector(selectItems);
    const value = useSelector(selectValue);

    const findItem = (item) => {
        let addedItem = products.find((product) => product.title === item.title);
        return addedItem ? addedItem.amount : 0;
    };

    const handleChange = ({ e, amountOld, title, price }) => {
        let val = e.target.value === "" ? 0 : e.target.value;
        let gap = parseInt(val) - parseInt(amountOld);
        gap > 0
            ? dispatch(buy({ amount: gap, price, title }))
            : dispatch(sell({ amount: gap * -1, price, title }));
    };

    const buyItems = (amount, price, title) => {
        dispatch(buy({ amount, price, title }));
    };
    const sellItems = (amount, price, title) => {
        dispatch(sell({ amount, price, title }));
    };

    return (
        <div>

            <Card sx={{ borderRadius: '15px' }}>
                <Box>
                <CardMedia
                    sx={{ height: '150px', WebkitBackgroundSize: 'contain', width:'100%' }}
                    image={item.img}
                    alt={item.title}
                    
                />

                </Box>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '30px' }}>
                         $ {item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color='white' disabled={!findItem(item)} onClick={() => sellItems(1, item.price, item.title)}><RemoveIcon /></Button>
                    <TextField id="outlined-basic"
                        type="number" variant="outlined" pattern="\d*"
                        value={findItem(item)}
                        onChange={(e) =>
                            handleChange({
                                e,
                                amountOld: findItem(item),
                                title: item.title,
                                price: item.price,
                            })
                        } />
                    <Button size="large" color='white' disabled={value < 0}

                        onClick={() => buyItems(1, item.price, item.title)}><AddIcon /></Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default ProductCard
