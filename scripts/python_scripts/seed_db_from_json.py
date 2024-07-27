import json
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="RafiNizar",
    database="unfold_hackathon_db"
)

cursor = mydb.cursor()

sql_insert_merchant = """
    INSERT INTO merchants (id, address, chain_name, lat, lng, halal, rating, vote_count, business_type)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

sql_insert_dish = """
    INSERT INTO dishes (id, merchant_id, name, price)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def process_data(data):
    search_result = data.get('searchResult', {})
    total_count = search_result.get('totalCount', 0)
    search_merchants = search_result.get('searchMerchants', [])

    for merchant in search_merchants:
        merchant_id = merchant.get('id', 'N/A')
        address = merchant.get('address', {}).get('name', 'N/A')
        chain_name = merchant.get('chainName', 'N/A')
        latitude = merchant.get('latlng', {}).get('latitude', 0.0)
        longitude = merchant.get('latlng', {}).get('longitude', 0.0)
        halal = merchant.get('merchantBrief', {}).get('halal', False)
        rating = merchant.get('merchantBrief', {}).get('rating', 0.0)
        vote_count = merchant.get('merchantBrief', {}).get('vote_count', 0)
        business_type = merchant.get('businessType', 'N/A')

        dishes = merchant.get('dishes', {})

        if len(dishes) > 0:
            for dish in dishes:
                print(dish)

        # val = (merchant_id, address, chain_name, latitude, longitude, halal, rating, vote_count, business_type)
        # cursor.execute(sql_insert_merchant, val)

        break

    mydb.commit()

    print(f"Total merchants in this JSON: {len(search_merchants)}")
    return search_merchants

if __name__ == "__main__":
    file_path = './../json_dumps/grabfood_search_hi_page2.json'
    data = read_json(file_path)
    merchants = process_data(data)

    

    
    print(cursor.rowcount, "record(s) inserted.")

    cursor.close()
    mydb.close()
