from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome("./chromedriver")

PAGE_URL = "https://www.nike.com/in/w/mens-shoes-nik1zy7ok"

driver.get(PAGE_URL)

product_cards = driver.find_element(By.CLASS_NAME, "product-card")

print(product_cards)


sleep(10)
assert "No results found." not in driver.page_source
driver.close()
