APP_NAME = columbia-divhacks-2022

.DEFAULT_GOAL=all
DOCKERFILES = $(shell find -name 'Dockerfile')
.PHONY: $(DOCKERFILES)

all: docker-images clean deploy

install:
    # kind create cluster --config kind.config --name $(APP_NAME)
	kubectl apply --filename https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml


docker-images: $(DOCKERFILES)
	echo $(DOCKERFILES)

$(DOCKERFILES): %/Dockerfile: %
	docker build -t invincibot/$(APP_NAME)-$< $<
	docker push invincibot/$(APP_NAME)-$<

deploy:
	kubectl apply -f "k8s/*.yml"

clean:
	kubectl delete -f "k8s/*.yml"
