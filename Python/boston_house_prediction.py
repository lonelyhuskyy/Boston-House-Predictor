import warnings
import pickle
import numpy as np
import pandas as pd
import math
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import xgboost as xgb
from sklearn.model_selection import GridSearchCV

warnings.filterwarnings("ignore")



df_boston = pd.read_csv('BostonHousing.csv')
cols= ['rad','chas','dis','zn','b']
df_boston.drop(columns=cols,inplace=True)

df_boston= np.array(df_boston)

print(df_boston)

l= [1,3,7,8,11]
#remove zn, chas, dis, rad and b for feature selection.



X = df_boston[:,:-1]
X= X.astype('int')
y = df_boston[:, -1]
y= y.astype('int')

sc_x = StandardScaler()
X= sc_x.fit_transform(X)
X_train_xgb, X_test_xgb, y_train_xgb, y_test_xgb = train_test_split(X,y,test_size=0.3,random_state=0)
regressor_xgb= xgb.XGBRegressor(eval_metric= 'rmsle')
param_grid = {"max_depth" : [1,2,3,4,5], 
              "n_estimators" : [400,500,600,700],
              "learning_rate" : [0.01,0.1,0.25,0.5]}

search= GridSearchCV(regressor_xgb,param_grid, cv=10).fit(X_train_xgb,y_train_xgb)


regressor_xgb= xgb.XGBRegressor(learning_rate= search.best_params_["learning_rate"],
                              n_estimators= search.best_params_["n_estimators"],
                              max_depth = search.best_params_["max_depth"],random_state= 5)

regressor_xgb.fit(X_train_xgb,y_train_xgb)

pickle.dump(regressor_xgb,open('model.pkl','wb'))
model= pickle.load(open('model.pkl','rb'))

