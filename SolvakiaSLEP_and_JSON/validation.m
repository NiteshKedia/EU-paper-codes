%%% LeastR 
%%% 10 fold cross validation for bi-class %%%
group = length(y);
indices = crossvalind('Kfold',group,10);
meanVector=[];

tic;
for i = 1:10
    test = (indices == i); train = ~test;
%     ATrain=A(train,:);  % Training data
%     yTrain=y(train);    % Training y
%     [xTrain, funValTrain, ValueLTrain] = LeastR(ATrain, yTrain, rho, opts);
    ATest = A(test,:);  % Testing data
    yTest = y(test);    % Testing y
    
    yResult = ATest * x;
    yResultLogic = yResult > 0;
    
    meanVector(i) = length(find(yResultLogic == yTest)) / length(yTest);
end
toc;

accuracy = mean(meanVector)
